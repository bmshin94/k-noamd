import { chromium, type FullConfig } from "@playwright/test";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const TEST_USER = {
  email: "e2e-test@nomad.test",
  password: "TestPassword1234!",
};

const AUTH_DIR = path.join(__dirname, ".auth");
const AUTH_FILE = path.join(AUTH_DIR, "user.json");

async function globalSetup(config: FullConfig) {
  // .auth 디렉토리 보장
  if (!fs.existsSync(AUTH_DIR)) {
    fs.mkdirSync(AUTH_DIR, { recursive: true });
  }

  // Supabase에 테스트 유저 생성 시도
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signUp({
      email: TEST_USER.email,
      password: TEST_USER.password,
    });
  } catch {
    console.log("[E2E Setup] Supabase 유저 생성 스킵");
  }

  // storageState 저장 시도 — 실패해도 guest 테스트는 영향 없음
  try {
    const { baseURL } = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`${baseURL}/login`, { timeout: 15000 });
    // 이메일/비밀번호 입력 필드를 name 속성으로 찾기
    await page.locator('input[name="email"]').fill(TEST_USER.email);
    await page.locator('input[name="password"]').fill(TEST_USER.password);
    await page.locator('button[type="submit"]').click();
    await page.waitForURL(`${baseURL}/`, { timeout: 10000 });

    await page.context().storageState({ path: AUTH_FILE });
    await browser.close();
    console.log("[E2E Setup] 인증 상태 저장 완료");
  } catch {
    // guest 테스트만 있으므로 auth 실패는 무시
    // 빈 storageState 파일 생성
    fs.writeFileSync(AUTH_FILE, JSON.stringify({ cookies: [], origins: [] }));
    console.log("[E2E Setup] Auth 스킵 → 빈 storageState 생성");
  }
}

export default globalSetup;
