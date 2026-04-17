import { createClient } from "@supabase/supabase-js";

const TEST_USER_EMAIL = "e2e-test@nomad.test";

async function globalTeardown() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // 테스트 중 작성된 리뷰 정리
  await supabase
    .from("reviews")
    .delete()
    .like("author_name", "e2e-%");

  // 참고: 테스트 유저 삭제는 Supabase service_role key 필요
  // 현재는 anon key 사용이므로 유저 레코드는 유지
  console.log(`[E2E Teardown] 테스트 데이터 정리 완료`);
}

export default globalTeardown;
