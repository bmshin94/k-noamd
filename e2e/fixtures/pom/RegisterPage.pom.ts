import { type Page, type Locator } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByLabel("이메일");
    this.passwordInput = page.getByLabel("비밀번호");
    this.submitButton = page.getByRole("button", { name: /가입|회원가입/ });
    this.errorMessage = page.getByText(/문제가 생겼어요|올바르지 않아요/);
    this.loginLink = page.getByRole("link", { name: /로그인/ });
  }

  async goto() {
    await this.page.goto("/register");
  }

  async register(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
