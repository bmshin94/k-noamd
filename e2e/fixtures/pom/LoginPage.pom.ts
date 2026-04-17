import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByLabel("이메일");
    this.passwordInput = page.getByLabel("비밀번호");
    this.submitButton = page.getByRole("button", { name: "로그인" });
    this.errorMessage = page.getByText(/올바르지 않아요/);
    this.registerLink = page.getByRole("link", { name: /회원가입/ });
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
