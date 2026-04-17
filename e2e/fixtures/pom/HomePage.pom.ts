import { type Page, type Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  // Hero
  readonly heroSection: Locator;
  readonly searchInput: Locator;

  // FilterBar
  readonly filterBar: Locator;
  readonly regionTabs: Locator;

  // BestCitiesSection
  readonly bestCitiesSection: Locator;
  readonly bestCityCards: Locator;

  // CityCardGrid
  readonly cityCards: Locator;

  // RecentSection
  readonly hotBadges: Locator;

  // CTASection
  readonly emailInput: Locator;
  readonly subscribeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heroSection = page.getByRole("region", { name: /히어로|hero/i });
    this.searchInput = page.getByPlaceholder(/도시 이름|검색/);

    this.filterBar = page.locator("section.sticky");
    this.regionTabs = page.getByRole("tab");

    this.bestCitiesSection = page.getByRole("region", { name: /베스트|best/i });
    this.bestCityCards = page.locator("article").filter({ hasText: /🥇|🥈|🥉/ });

    this.cityCards = page.locator("article.group");

    this.hotBadges = page.getByText("🔥 HOT");

    this.emailInput = page.getByPlaceholder("이메일을 입력하세요");
    this.subscribeButton = page.getByRole("button", { name: "구독하기" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickCityCard(index = 0) {
    await this.cityCards.nth(index).click();
  }

  async clickRegionTab(regionName: string) {
    await this.regionTabs.filter({ hasText: regionName }).click();
  }
}
