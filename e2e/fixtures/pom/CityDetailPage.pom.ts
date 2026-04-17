import { type Page, type Locator } from "@playwright/test";

export class CityDetailPage {
  readonly page: Page;

  // Breadcrumb
  readonly breadcrumb: Locator;
  readonly breadcrumbHome: Locator;

  // Hero
  readonly heroSection: Locator;
  readonly cityName: Locator;
  readonly favoriteButton: Locator;

  // Score Panel
  readonly scorePanel: Locator;
  readonly totalScore: Locator;
  readonly progressBars: Locator;

  // Review List
  readonly reviewList: Locator;
  readonly reviewCards: Locator;
  readonly sortButtons: Locator;

  // Related Cities
  readonly relatedCities: Locator;

  // Write Review FAB
  readonly writeReviewFab: Locator;
  readonly reviewDialog: Locator;
  readonly starButtons: Locator;
  readonly reviewTextarea: Locator;
  readonly submitReviewButton: Locator;
  readonly cancelReviewButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.breadcrumb = page.getByRole("navigation", { name: /breadcrumb/i });
    this.breadcrumbHome = page.getByRole("link", { name: "홈" });

    this.heroSection = page.locator(".relative.w-full").first();
    this.cityName = page.getByRole("heading", { level: 1 });
    this.favoriteButton = page.getByRole("button", { name: /즐겨찾기|방문 인증/i });

    this.scorePanel = page.getByText("도시 상세 리포트").locator("..");
    this.totalScore = page.getByText("TOTAL SCORE").locator("..");
    this.progressBars = page.getByRole("progressbar");

    this.reviewList = page.getByText("리뷰").locator("..").first();
    this.reviewCards = page.locator(".divide-y > div");
    this.sortButtons = page.getByRole("button", { name: /최신순|도움순|평점순/ });

    this.relatedCities = page.getByText("주변 다른 도시").locator("..");

    this.writeReviewFab = page.getByRole("button", { name: "리뷰 작성하기" });
    this.reviewDialog = page.getByRole("dialog");
    this.starButtons = page.getByRole("button").filter({ has: page.locator("svg") }).locator("nth=0");
    this.reviewTextarea = page.getByPlaceholder(/와이파이 속도/);
    this.submitReviewButton = page.getByRole("button", { name: "리뷰 등록하기" });
    this.cancelReviewButton = page.getByRole("button", { name: "취소" });
  }

  async goto(cityId: string) {
    await this.page.goto(`/cities/${cityId}`);
  }

  async openReviewDialog() {
    await this.writeReviewFab.click();
  }

  async closeReviewDialog() {
    await this.cancelReviewButton.click();
  }
}
