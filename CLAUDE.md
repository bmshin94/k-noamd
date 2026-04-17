@AGENTS.md

---

## E2E 테스트 구조 (Playwright)

### 디렉토리 구조

```
e2e/
├── playwright.config.ts          # 전체 설정: projects(desktop/mobile), webServer, globalSetup
├── global-setup.ts               # 전체 실행 전 1회: 테스트 유저 생성 + storageState 저장
├── global-teardown.ts            # 전체 실행 후 1회: 테스트 데이터 정리
│
├── fixtures/
│   ├── index.ts                  # 커스텀 test 객체 (모든 POM을 fixture로 주입)
│   ├── auth.fixture.ts           # 로그인 상태 재사용 fixture (storageState 기반)
│   └── pom/                      # Page Object Model 클래스
│       ├── HomePage.pom.ts
│       ├── CityDetailPage.pom.ts
│       ├── LoginPage.pom.ts
│       └── RegisterPage.pom.ts
│
├── tests/
│   ├── guest/                    # 비로그인 사용자 시나리오 → desktop project 실행
│   │   ├── home.spec.ts
│   │   ├── city-browse.spec.ts
│   │   └── city-detail.spec.ts
│   ├── auth-flow/                # 인증 흐름 테스트 → desktop project 실행
│   │   ├── login.spec.ts
│   │   └── register.spec.ts
│   └── mobile/                   # 모바일 전용 (375px) → mobile project 실행
│       ├── navigation.spec.ts
│       └── scroll.spec.ts
│
└── .auth/
    └── user.json                 # Playwright storageState (gitignore 대상)
```

### 핵심 규칙

1. **테스트 import**: 항상 `@playwright/test`가 아닌 `../../fixtures`에서 `{ test, expect }` import
   - 이렇게 해야 POM fixture(homePage, cityDetailPage 등)를 인수로 받을 수 있음

2. **Playwright projects 분리**:
   - `desktop` project: `tests/guest/**`, `tests/auth-flow/**` 담당
   - `mobile` project: `tests/mobile/**` 담당 (375px 뷰포트)
   - spec 파일을 추가할 때 어느 폴더에 넣을지 먼저 결정

3. **인증 상태 재사용**:
   - `global-setup.ts`가 `e2e/.auth/user.json`에 세션 저장
   - 로그인이 필요한 테스트는 `auth.fixture.ts`의 `authenticatedTest` 사용
   - 현재 구현된 테스트는 대부분 비로그인(guest) 시나리오

4. **Page Object Model 패턴**:
   - selector와 action은 반드시 POM 클래스 안에 정의
   - spec 파일에 `page.locator(...)` 직접 작성 금지
   - 새 페이지 추가 시 `fixtures/pom/`에 POM 파일 먼저 생성

5. **환경 변수**:
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`가 `.env.local`에 있어야 global-setup 동작
   - CI 환경에서는 환경 변수를 별도로 주입 필요

### 실행 명령어

```bash
npm run e2e          # 전체 E2E 실행 (headless)
npm run e2e:ui       # Playwright UI 모드 (인터랙티브)
npm run e2e:report   # 마지막 실행 결과 HTML 리포트 열기
```
