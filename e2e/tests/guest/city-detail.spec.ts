import { test, expect } from "../../fixtures";

// TODO: 도시 상세 페이지 E2E 테스트
// 담당 시나리오:
//   - /cities/jeju-seogwipo 접속 시 "제주 서귀포" 정보 표시
//   - Breadcrumb: 홈 > 도시 목록 > 제주 서귀포
//   - 점수 패널: Progress 바 4개 표시
//   - WriteReviewButton FAB 클릭 → Dialog 열림
//   - Dialog 취소 버튼 → 닫힘
//   - 존재하지 않는 id → 404 페이지
test.describe("도시 상세 페이지", () => {
  test.skip("상세 페이지 기본 렌더링", async () => {});
});
