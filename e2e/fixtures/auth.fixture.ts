import { test as base, type BrowserContext } from "@playwright/test";
import path from "path";

export const AUTH_FILE = path.join(__dirname, "../.auth/user.json");

// 로그인된 컨텍스트를 제공하는 fixture
// global-setup에서 저장한 storageState를 재사용해 매 테스트마다 로그인 과정 생략
export const authenticatedTest = base.extend<{
  authenticatedContext: BrowserContext;
}>({
  authenticatedContext: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: AUTH_FILE,
    });
    await use(context);
    await context.close();
  },
});
