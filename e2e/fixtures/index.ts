import { test as base } from "@playwright/test";
import { HomePage } from "./pom/HomePage.pom";
import { CityDetailPage } from "./pom/CityDetailPage.pom";
import { LoginPage } from "./pom/LoginPage.pom";
import { RegisterPage } from "./pom/RegisterPage.pom";

// 모든 POM을 fixture로 제공하는 커스텀 test 객체
// 사용법: import { test, expect } from "@/e2e/fixtures"
export const test = base.extend<{
  homePage: HomePage;
  cityDetailPage: CityDetailPage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cityDetailPage: async ({ page }, use) => {
    await use(new CityDetailPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export { expect } from "@playwright/test";
