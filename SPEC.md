# NomadKorea — 단계별 개선 계획 (Phase Roadmap)

> **공통 제약사항**: 데이터베이스 미사용 (mock data 기반), 기능 구현 없이 UI만, Next.js App Router + Server Component 우선, Tailwind + shadcn/ui 사용

---

## 요약

| Phase | 핵심 작업 | 신규 라우트 |
|-------|-----------|------------|
| Phase 1 | 홈페이지 반응형 + 디테일 개선 | 없음 |
| Phase 2 | 도시 상세 페이지 | `/cities/[id]` |
| Phase 3 | 인증 UI + 마이페이지 기본 | `/login`, `/register`, `/my` |
| Phase 4 | 도시 목록/검색 페이지 | `/cities` |
| Phase 5 | 커뮤니티 게시판 | `/community`, `/community/[id]`, `/community/write` |
| Phase 6 | 마이페이지 완성 + 전역 UX | `/my/settings`, `/my/notifications` |

---

## - [x] Phase 1 — 홈페이지 UI 완성도 개선

### 개요
현재 구현된 홈페이지의 완성도를 높인다. 모바일 반응형이 미흡한 Header, 인터랙션이 없는 버튼들, 시각적 디테일이 부족한 섹션들을 보완한다. 이 Phase는 기존 파일 수정만으로 완결된다. 새 페이지 라우트는 추가하지 않는다.

**수정 대상 파일**: `components/layout/Header.tsx`, `components/home/HeroSection.tsx`, `components/home/CityCard.tsx`, `components/home/BestCityCard.tsx`, `components/home/FilterBar.tsx`, `components/home/RecentSection.tsx`, `components/home/CTASection.tsx`, `app/globals.css`

### 수정/개선 항목

- [x] **Header — 모바일 햄버거 메뉴**: 768px 미만에서 nav 링크 숨기고 `Sheet` 컴포넌트로 사이드 메뉴 구현 (`npx shadcn@latest add sheet`)
- [x] **Header — 스크롤 시 배경 변화**: 투명 → 불투명 전환 (scroll event, `use client`)
- [x] **HeroSection — 검색창 UX**: placeholder 텍스트 개선, 돋보기 아이콘 버튼 추가 (shadcn `Button` variant=ghost)
- [x] **HeroSection — 모바일 레이아웃**: 통계 수치 영역이 모바일에서 2열로 깨지는 현상 수정
- [x] **CityCard — 호버 효과**: `group-hover` 클래스로 이미지 scale + 카드 shadow 상승 애니메이션 추가
- [x] **CityCard — 점수바 레이블**: wifi/카페/물가/교통 레이블이 잘려 보이는 경우 수정, 5점 만점 숫자 표시
- [x] **BestCityCard — 1위 카드 크기**: 데스크탑에서 1위 카드가 나머지보다 확연히 크게 보이도록 수정
- [x] **FilterBar — 드롭다운 기본값 표시**: Select 초기값 placeholder 텍스트 명확히 표시
- [x] **RecentSection — 리뷰 카드 별점 UI**: 현재 숫자만 표시 → ★ 별 아이콘 5개로 시각화 (`lucide-react` Star 아이콘)
- [x] **RecentSection — HOT 글 뱃지**: 좋아요 수가 100 이상이면 🔥 HOT 뱃지 표시
- [x] **CTASection — 이메일 입력 UX 개선**: 입력창 + 버튼 높이 정렬, 모바일에서 세로 스택 변환
- [x] **전체 — 스켈레톤 UI 추가**: 카드 그리드 영역에 `Skeleton` 컴포넌트로 로딩 상태 UI 제작 (`npx shadcn@latest add skeleton`)
- [x] **Footer 개선**: 링크 항목 hover 색상, 소셜 아이콘(GitHub, Twitter, Instagram) 추가

### 검증/확인 항목

- [ ] 모바일(375px)에서 Header 햄버거 메뉴 열림/닫힘 동작 확인
- [ ] 태블릿(768px)에서 CityCard Grid가 2열로 표시되는지 확인
- [ ] 데스크탑(1280px)에서 BestCitiesSection 1위 카드가 크게 표시되는지 확인
- [ ] CityCard 호버 시 이미지 scale + shadow 애니메이션 동작 확인
- [ ] CTASection 이메일 입력창이 모바일에서 세로 스택으로 변환되는지 확인
- [x] `npm run build` 빌드 에러 없음 확인
- [x] TypeScript 타입 에러 없음 확인 (`npx tsc --noEmit`)

---

## - [ ] Phase 2 — 도시 상세 페이지 (`/cities/[id]`)

### 개요
홈페이지 도시 카드를 클릭했을 때 이동하는 도시별 상세 페이지를 구현한다. 도시의 상세 점수, 리뷰 목록, 주변 추천 도시를 보여준다. 동적 라우트(`[id]`)를 사용하며, mock data의 `CITIES` 배열에서 `id`로 데이터를 조회한다. 새로운 타입과 mock 데이터를 추가한다.

**신규 파일**: `app/cities/[id]/page.tsx`, `components/city/CityDetailHero.tsx`, `components/city/CityScorePanel.tsx`, `components/city/CityReviewList.tsx`, `components/city/ReviewCard.tsx`, `components/city/RelatedCities.tsx`, `components/city/WriteReviewButton.tsx` (client)

**수정 파일**: `types/index.ts` (Review 타입 보강), `lib/mock-data.ts` (리뷰 데이터 도시별 확장)

### 수정/개선 항목

- [ ] **`types/index.ts` 보강**: `Review` 타입에 `cityId`, `avatarUrl?`, `helpful` (도움됐어요 수) 필드 추가
- [ ] **`lib/mock-data.ts` 확장**: 각 도시별 리뷰 3~5개 추가 (총 30개 이상), `getCityById(id)` / `getReviewsByCityId(id)` helper 함수 추가
- [ ] **`app/cities/[id]/page.tsx`**: Server Component, `params.id`로 도시 조회, 없으면 `notFound()` 처리
- [ ] **`CityDetailHero`**: 도시 대표 이미지 전체 너비, 이름/지역/별점/리뷰수 오버레이, 즐겨찾기 버튼
- [ ] **`CityScorePanel`**: wifi/카페/물가/교통 4개 점수를 Progress 바 + 숫자로 표시, 총점 원형 표시 (CSS border-radius 활용)
- [ ] **`CityReviewList`**: 리뷰 카드 목록, 최신순 정렬 표시, "더 보기" 버튼 (UI만)
- [ ] **`ReviewCard`**: 작성자 Avatar + 이름, 별점, 날짜, 본문, "도움됐어요 👍 N" 버튼
- [ ] **`RelatedCities`**: 같은 지역(`region`) 도시 카드 가로 스크롤 (`overflow-x-auto`)
- [ ] **`WriteReviewButton`**: 우하단 고정 FAB(Floating Action Button) 스타일, 클릭 시 모달 (UI만, `use client`)
- [ ] **리뷰 작성 모달**: shadcn `Dialog` + 별점 선택 UI + textarea + 제출 버튼 (`npx shadcn@latest add dialog textarea`)
- [ ] **빵 부스러기 (Breadcrumb)**: 홈 > 도시 목록 > [도시명] 네비게이션 추가 (`npx shadcn@latest add breadcrumb`)
- [ ] **`generateStaticParams`**: 빌드 시 모든 도시 id로 정적 경로 생성

### 검증/확인 항목

- [ ] `/cities/seoul-seongsu` 접속 시 성수동 상세 페이지 정상 렌더링 확인
- [ ] `/cities/존재하지않는id` 접속 시 404 페이지 표시 확인
- [ ] CityScorePanel 점수 바가 5점 만점 기준 정확한 비율로 표시되는지 확인
- [ ] RelatedCities 가로 스크롤 모바일에서 정상 동작 확인
- [ ] WriteReviewButton FAB 클릭 시 Dialog 열림 확인
- [ ] 홈페이지 CityCard/BestCityCard에서 상세 페이지로 링크 연결 확인
- [ ] `generateStaticParams` 동작으로 `npm run build` 정적 경로 생성 확인

---

## - [ ] Phase 3 — 인증 UI (`/login`, `/register`)

### 개요
이미 라우트 stub(`app/login/page.tsx`, `app/register/page.tsx`)이 존재한다. 이를 실제 UI로 완성하고, 소셜 로그인 버튼, 폼 레이아웃, 유효성 검사 피드백 UI를 구현한다. `app/auth/actions.ts`는 Server Action stub으로 유지 (실제 로직 없음). 프로필 페이지(`/my`)도 이 Phase에서 추가한다.

**수정 파일**: `app/login/page.tsx`, `app/register/page.tsx`

**신규 파일**: `app/my/page.tsx`, `components/auth/LoginForm.tsx` (client), `components/auth/RegisterForm.tsx` (client), `components/auth/SocialLoginButtons.tsx`, `components/my/ProfileHeader.tsx`, `components/my/MyStats.tsx`, `components/my/MyReviewList.tsx`, `components/my/MyFavoriteList.tsx`

### 수정/개선 항목

- [ ] **`LoginForm`**: 이메일/비밀번호 입력 + 로그인 버튼, "비밀번호 찾기" 링크, 회원가입 유도 텍스트 (`use client`)
- [ ] **`RegisterForm`**: 닉네임/이메일/비밀번호/비밀번호확인 입력, 약관 동의 체크박스 (`npx shadcn@latest add checkbox`), 가입 버튼 (`use client`)
- [ ] **폼 유효성 피드백 UI**: 빈 입력 시 빨간 테두리 + 오류 메시지 텍스트 표시 (상태값만, 실제 검증 로직 없음)
- [ ] **`SocialLoginButtons`**: 카카오 로그인(노란 버튼) + 구글 로그인(흰 버튼) UI, 각 브랜드 컬러/로고 적용
- [ ] **로그인 페이지 레이아웃**: 좌측 브랜드 이미지 패널 + 우측 폼 패널 (md 이상 2열, 모바일 폼만)
- [ ] **회원가입 페이지 레이아웃**: 로그인과 동일한 2열 레이아웃
- [ ] **`app/my/page.tsx`**: 로그인된 상태 가정, mock 유저 데이터로 구성
- [ ] **`ProfileHeader`**: 아바타 + 닉네임 + 가입일 + 팔로워/팔로잉 수 표시
- [ ] **`MyStats`**: 내 리뷰 수 / 즐겨찾기 수 / 방문 도시 수 통계 카드 3개
- [ ] **`MyReviewList`**: 내가 쓴 리뷰 목록 (mock 3개), 삭제 버튼 UI만
- [ ] **`MyFavoriteList`**: 즐겨찾기한 도시 카드 그리드 (mock 3개)
- [ ] **Header 로그인/로그아웃 상태 분기**: mock `isLoggedIn = false` 기본값으로 Header에 조건부 렌더링 추가 (Avatar + 닉네임 표시)
- [ ] **shadcn 추가**: `npx shadcn@latest add checkbox label form`

### 검증/확인 항목

- [ ] `/login` 페이지 데스크탑 2열 레이아웃 확인
- [ ] `/login` 페이지 모바일 폼 단일 열 확인
- [ ] `/register` 모든 입력 필드 표시 및 탭 이동 확인
- [ ] 소셜 로그인 버튼 카카오(노란색) / 구글(흰색) 스타일 확인
- [ ] `/my` 페이지 프로필/통계/리뷰/즐겨찾기 섹션 전부 확인
- [ ] Header에서 `/login`, `/register` 링크 정상 이동 확인

---

## - [ ] Phase 4 — 도시 목록/검색 페이지 (`/cities`)

### 개요
홈페이지의 필터바는 UI만 있고 실제로 도시를 필터링하지 않는다. 이 Phase에서는 별도의 전용 도시 목록 페이지(`/cities`)를 만들고, URL 쿼리 파라미터 기반의 필터/정렬 UI를 완성한다. 실제 필터링 로직은 구현하되 서버 fetch 없이 mock data 배열 내에서 처리한다.

**신규 파일**: `app/cities/page.tsx`, `components/cities/CityListHeader.tsx`, `components/cities/CityFilter.tsx` (client), `components/cities/CityGrid.tsx`, `components/cities/CityListItem.tsx`, `components/cities/ViewToggle.tsx` (client), `components/cities/Pagination.tsx`

### 수정/개선 항목

- [ ] **`app/cities/page.tsx`**: Server Component, `searchParams`로 region/sort/view 읽기, mock 전체 도시 목록 표시
- [ ] **`CityListHeader`**: "도시 목록" 제목 + 총 도시 수 표시 + 뷰 토글(Grid/List) 버튼
- [ ] **`CityFilter`**: 지역 탭 필터(shadcn Tabs) + 정렬 Select(평점순/리뷰순/물가순) + 점수별 슬라이더 필터 UI (`npx shadcn@latest add slider`)
- [ ] **`ViewToggle`**: 그리드뷰 ⊞ / 리스트뷰 ☰ 토글 버튼 (`use client`)
- [ ] **`CityGrid`**: 현재 홈의 CityCardGrid를 재사용 가능하게 분리 (props로 cities 배열 받기)
- [ ] **`CityListItem`**: 리스트뷰용 가로 레이아웃 카드 (썸네일 좌측 + 정보 우측)
- [ ] **`Pagination`**: 페이지 번호 UI (mock으로 1~5페이지, 현재 1페이지 활성)
- [ ] **검색창**: 상단 키워드 검색 Input + 검색 버튼, URL에 `?q=키워드` 반영 (UI + URL 반영만, 실제 필터는 mock)
- [ ] **필터 칩**: 적용된 필터를 태그 형태로 표시 + X 버튼으로 초기화
- [ ] **"결과 없음" 상태**: 필터 결과 0개일 때 빈 상태 UI (일러스트 + 안내 텍스트)
- [ ] **Header nav에 "도시 목록" 링크 추가**

### 검증/확인 항목

- [ ] `/cities` 접속 시 전체 도시 목록 표시 확인
- [ ] 지역 탭 클릭 시 URL 쿼리 파라미터 변경 확인 (`?region=제주`)
- [ ] 그리드/리스트 뷰 토글 시 레이아웃 전환 확인
- [ ] 검색창 입력 후 URL에 `?q=` 파라미터 반영 확인
- [ ] 모바일에서 필터 영역이 접힘/펼침 가능한지 확인
- [ ] Pagination UI 표시 및 번호 버튼 스타일 확인

---

## - [ ] Phase 5 — 커뮤니티 페이지 (`/community`)

### 개요
홈의 RecentSection에서 보이는 HOT 글 목록을 전용 커뮤니티 페이지로 확장한다. 글 목록, 글 상세, 글 작성 UI를 만든다. mock 데이터를 대폭 확장하여 카테고리별 게시글 20개 이상을 추가한다.

**신규 파일**: `app/community/page.tsx`, `app/community/[id]/page.tsx`, `app/community/write/page.tsx`, `components/community/PostList.tsx`, `components/community/PostCard.tsx`, `components/community/PostDetail.tsx`, `components/community/CommentList.tsx`, `components/community/CommentCard.tsx`, `components/community/WritePostForm.tsx` (client), `components/community/PostFilter.tsx` (client)

**수정 파일**: `types/index.ts` (CommunityPost 타입 보강), `lib/mock-data.ts` (게시글 20개+, 댓글 데이터 추가)

### 수정/개선 항목

- [ ] **`types/index.ts` 보강**: `CommunityPost`에 `category`, `content`, `author`, `authorAvatar?`, `cityId?` 추가. `Comment` 인터페이스 신규 추가
- [ ] **`lib/mock-data.ts` 확장**: 카테고리별(후기/질문/모임/정보) 게시글 20개, 댓글 mock 데이터 추가
- [ ] **`app/community/page.tsx`**: 글 목록 페이지, 카테고리 탭 + 정렬(최신/인기) + 글쓰기 버튼
- [ ] **`PostFilter`**: 카테고리 탭(전체/후기/질문/모임/정보) + 정렬 Select (`use client`)
- [ ] **`PostCard`**: 제목/카테고리 뱃지/작성자/날짜/조회수/좋아요/댓글 수 표시, 도시 연관 태그
- [ ] **`app/community/[id]/page.tsx`**: 글 상세 페이지, `getPostById(id)` 조회
- [ ] **`PostDetail`**: 제목/본문/작성자 정보/좋아요 버튼/공유 버튼 UI
- [ ] **`CommentList`**: 댓글 목록 + 총 댓글 수 헤더
- [ ] **`CommentCard`**: Avatar + 닉네임 + 날짜 + 본문 + 대댓글 표시
- [ ] **댓글 작성 UI**: textarea + 등록 버튼 (로그인 유도 메시지와 함께)
- [ ] **`app/community/write/page.tsx`**: 글 작성 페이지
- [ ] **`WritePostForm`**: 카테고리 선택 / 제목 Input / 본문 textarea / 도시 연관 Select / 제출 버튼 (`use client`, `npx shadcn@latest add textarea`)
- [ ] **Header nav에 "커뮤니티" 링크 추가**

### 검증/확인 항목

- [ ] `/community` 카테고리 탭 표시 확인
- [ ] `/community/p1` 글 상세 정상 렌더링 확인
- [ ] `/community/존재하지않는id` → 404 처리 확인
- [ ] `/community/write` 글 작성 폼 모든 필드 표시 확인
- [ ] 모바일에서 PostCard 레이아웃 깨짐 없음 확인
- [ ] 글 목록에서 HOT 뱃지(좋아요 100+) 정상 표시 확인

---

## - [ ] Phase 6 — 사용자 경험 완성 (마이페이지 개선 + 온보딩)

### 개요
Phase 3에서 만든 기본 마이페이지를 완성하고, 신규 사용자 온보딩 UI, 알림 페이지, 설정 페이지를 추가한다. 전체 사이트의 네비게이션 UX를 마무리한다.

**신규 파일**: `app/my/settings/page.tsx`, `app/my/notifications/page.tsx`, `components/my/SettingsForm.tsx` (client), `components/my/NotificationList.tsx`, `components/onboarding/OnboardingBanner.tsx`, `components/common/BackButton.tsx`, `components/common/ShareButton.tsx` (client), `components/common/ScrollToTop.tsx` (client)

**수정 파일**: `components/layout/Header.tsx` (알림 아이콘 + 드롭다운), `app/my/page.tsx` (탭 네비게이션 추가)

### 수정/개선 항목

- [ ] **`/my` 탭 네비게이션**: 내 정보 / 내 리뷰 / 즐겨찾기 / 설정 탭으로 내부 구성 변경 (shadcn Tabs)
- [ ] **`SettingsForm`**: 닉네임 변경 / 프로필 이미지 변경(UI만) / 알림 설정 토글 / 회원탈퇴 버튼 (`npx shadcn@latest add switch`)
- [ ] **`/my/notifications`**: 활동 알림 목록 (좋아요, 댓글, 새 리뷰 알림 mock 10개)
- [ ] **`NotificationList`**: 읽음/안읽음 상태 구분, 안읽음 뱃지 수, 전체 읽음 버튼
- [ ] **Header 알림 아이콘**: Bell 아이콘 + 안읽음 수 뱃지, 클릭 시 드롭다운 미리보기 (shadcn `Popover`)
- [ ] **`OnboardingBanner`**: 첫 방문자용 "지금 내 노마드 도시를 찾아보세요!" 배너, X 닫기 버튼 (localStorage 기반, `use client`)
- [ ] **`BackButton`**: 브라우저 뒤로가기 래퍼 컴포넌트 (`use client`, `router.back()`)
- [ ] **`ShareButton`**: Web Share API 버튼, 미지원 시 URL 복사로 fallback (`use client`)
- [ ] **`ScrollToTop`**: 스크롤 300px 이상 시 우하단에 ↑ 버튼 표시 (`use client`)
- [ ] **404 페이지**: `app/not-found.tsx` — 브랜드 스타일 적용한 커스텀 404 UI
- [ ] **로딩 UI**: `app/loading.tsx` — Skeleton 기반 전역 로딩 상태
- [ ] **에러 UI**: `app/error.tsx` — 에러 메시지 + 새로고침 버튼

### 검증/확인 항목

- [ ] `/my` 탭 4개 전환 확인
- [ ] `/my/settings` 폼 레이아웃 및 Switch 토글 UI 확인
- [ ] `/my/notifications` 알림 목록 + 읽음 상태 구분 확인
- [ ] Header Bell 아이콘 클릭 시 Popover 드롭다운 확인
- [ ] 존재하지 않는 URL 접속 시 커스텀 404 페이지 표시 확인
- [ ] ScrollToTop 버튼 스크롤 300px 이상 시 표시 확인
- [ ] `npm run build` 최종 빌드 에러 없음 확인
- [ ] Lighthouse 접근성 점수 80점 이상 확인 (alt 텍스트, aria-label 등)
