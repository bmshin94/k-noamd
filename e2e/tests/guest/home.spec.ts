import { test, expect } from "../../fixtures";

// DB(및 mock-data)에 저장된 전체 도시 목록 — 필터 미적용 시 모두 노출되어야 함
const DB_CITY_NAMES = [
  "서울 성수동",
  "서울 홍대",
  "서울 강남",
  "부산 해운대",
  "부산 광안리",
  "제주 서귀포",
  "강릉 시내",
  "전주 한옥마을",
  "대전 둔산",
] as const;

const TOTAL_CITY_COUNT = 10; // BestCityCards(3) + CityCards(7)

test.describe("홈페이지", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test("헤더에 NomadKorea 로고가 존재한다", async ({ page }) => {
    const logo = page.getByRole("banner").getByText("NomadKorea");
    await expect(logo).toBeVisible();
  });

  test("도시 카드들이 존재한다", async ({ page }) => {
    // article 태그로 렌더링된 카드 수 검증
    await expect(page.locator("article")).toHaveCount(TOTAL_CITY_COUNT);
    // 각 카드의 "자세히 보기" 링크도 동일한 수 존재
    await expect(page.getByRole("link", { name: "자세히 보기" })).toHaveCount(TOTAL_CITY_COUNT);
  });

  test("처음 접속 시 필터가 적용되어 있지 않다", async ({ page }) => {
    // 지역 탭: '전체' 탭이 활성(aria-selected=true) 상태
    await expect(page.getByRole("tab").first()).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tab").first()).toContainText("전체");

    // 드롭다운 Select들이 기본 placeholder 텍스트를 표시 (값 미선택 상태)
    const selects = page.getByRole("combobox");
    await expect(selects.nth(0)).toContainText("지역");
    await expect(selects.nth(1)).toContainText("평점순");
    await expect(selects.nth(2)).toContainText("물가");
    await expect(selects.nth(3)).toContainText("인터넷");
    await expect(selects.nth(4)).toContainText("카페");
  });

  test("필터 미적용 시 DB에 저장된 모든 도시가 카드로 표시된다", async ({ page }) => {
    // 전체 카드 수가 DB 도시 수와 일치
    await expect(page.locator("article")).toHaveCount(TOTAL_CITY_COUNT);

    // DB의 각 도시 이름이 페이지에 존재하는지 확인
    for (const cityName of DB_CITY_NAMES) {
      await expect(
        page.getByRole("heading", { name: cityName }).first()
      ).toBeVisible();
    }
  });
});
