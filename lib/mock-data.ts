import { City, Review, CommunityPost, PostComment } from "@/types";

export const CITIES: City[] = [
  {
    id: "seoul-seongsu",
    name: "서울 성수동",
    district: "서울특별시",
    region: "수도권",
    imageUrl: "https://images.unsplash.com/photo-1538485399081-7c8272e4bcc6?w=800&q=80",
    rating: 4.5,
    reviewCount: 203,
    scores: { wifi: 4.2, cafe: 4.7, price: 1.8, transport: 4.8 },
    tags: ["#감성", "#카페", "#트렌디"],
  },
  {
    id: "seoul-hongdae",
    name: "서울 홍대",
    district: "서울특별시",
    region: "수도권",
    imageUrl: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
    rating: 4.2,
    reviewCount: 178,
    scores: { wifi: 4.6, cafe: 4.3, price: 2.1, transport: 4.7 },
    tags: ["#홍대", "#청년", "#핫플"],
  },
  {
    id: "seoul-gangnam",
    name: "서울 강남",
    district: "서울특별시",
    region: "수도권",
    imageUrl: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=800&q=80",
    rating: 4.1,
    reviewCount: 155,
    scores: { wifi: 4.7, cafe: 3.9, price: 1.5, transport: 4.9 },
    tags: ["#비즈니스", "#IT"],
  },
  {
    id: "busan-haeundae",
    name: "부산 해운대",
    district: "부산광역시",
    region: "경상",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    rating: 4.3,
    reviewCount: 156,
    scores: { wifi: 3.8, cafe: 4.1, price: 3.2, transport: 4.3 },
    tags: ["#바다", "#힐링", "#야경"],
  },
  {
    id: "busan-gwangan",
    name: "부산 광안리",
    district: "부산광역시",
    region: "경상",
    imageUrl: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80",
    rating: 4.0,
    reviewCount: 98,
    scores: { wifi: 3.7, cafe: 3.8, price: 3.5, transport: 3.9 },
    tags: ["#광안대교", "#야경", "#감성"],
  },
  {
    id: "jeju-seogwipo",
    name: "제주 서귀포",
    district: "제주특별자치도",
    region: "제주",
    imageUrl: "https://images.unsplash.com/photo-1580020256-b2e7eb44f149?w=800&q=80",
    rating: 4.9,
    reviewCount: 201,
    scores: { wifi: 4.1, cafe: 4.4, price: 3.6, transport: 3.2 },
    tags: ["#자연", "#청정", "#감성카페"],
    rank: 1,
  },
  {
    id: "gangneung",
    name: "강릉 시내",
    district: "강원특별자치도",
    region: "강원",
    imageUrl: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=800&q=80",
    rating: 4.7,
    reviewCount: 112,
    scores: { wifi: 3.7, cafe: 4.3, price: 3.6, transport: 2.8 },
    tags: ["#바다", "#감성", "#커피거리"],
    rank: 2,
  },
  {
    id: "busan-haeundae-top3",
    name: "부산 해운대",
    district: "부산광역시",
    region: "경상",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    rating: 4.6,
    reviewCount: 156,
    scores: { wifi: 3.8, cafe: 4.1, price: 3.2, transport: 4.3 },
    tags: ["#바다", "#핫플"],
    rank: 3,
  },
  {
    id: "jeonju",
    name: "전주 한옥마을",
    district: "전북특별자치도",
    region: "전라",
    imageUrl: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&q=80",
    rating: 4.7,
    reviewCount: 89,
    scores: { wifi: 3.2, cafe: 4.2, price: 3.8, transport: 3.3 },
    tags: ["#한옥", "#감성", "#힐링"],
  },
  {
    id: "daejeon-dunsan",
    name: "대전 둔산",
    district: "대전광역시",
    region: "충청",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    rating: 4.1,
    reviewCount: 77,
    scores: { wifi: 4.5, cafe: 3.9, price: 3.9, transport: 4.1 },
    tags: ["#IT", "#저물가", "#카페"],
  },
];

export const BEST_CITIES: City[] = CITIES.filter((c) => c.rank).sort(
  (a, b) => (a.rank ?? 99) - (b.rank ?? 99)
);

export const GRID_CITIES: City[] = CITIES.filter((c) => !c.rank);

export const RECENT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "remote_dev",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=remote_dev",
    cityName: "제주 서귀포",
    cityId: "jeju-seogwipo",
    rating: 5,
    content: "와이파이 빠르고 카페 분위기도 최고에요!",
    helpful: 12,
    createdAt: "2시간 전",
  },
  {
    id: "r2",
    author: "코딩하는곰",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=coding_bear",
    cityName: "강릉 시내",
    cityId: "gangneung",
    rating: 4,
    content: "커피거리 완전 감성 넘쳐요 ㅎㅎ 추천!",
    helpful: 8,
    createdAt: "5시간 전",
  },
  {
    id: "r3",
    author: "wandercode",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=wandercode",
    cityName: "전주 한옥마을",
    cityId: "jeonju",
    rating: 5,
    content: "물가 저렴하고 분위기 너무 좋아요 재방문 예정",
    helpful: 15,
    createdAt: "어제",
  },
];

export const ALL_REVIEWS: Review[] = [
  ...RECENT_REVIEWS,
  {
    id: "r4",
    author: "nomad_king",
    cityName: "서울 성수동",
    cityId: "seoul-seongsu",
    rating: 5,
    content: "성수동은 역시 노마드의 성지입니다. 카페가 정말 많아요.",
    helpful: 24,
    createdAt: "3일 전",
  },
  {
    id: "r5",
    author: "coffee_lover",
    cityName: "서울 성수동",
    cityId: "seoul-seongsu",
    rating: 4,
    content: "주말에는 사람이 좀 많지만 평일 낮은 정말 작업하기 좋아요.",
    helpful: 10,
    createdAt: "1주일 전",
  },
  {
    id: "r6",
    author: "tech_wiz",
    cityName: "서울 강남",
    cityId: "seoul-gangnam",
    rating: 4,
    content: "교통이 편리하고 공유오피스가 많아서 좋습니다.",
    helpful: 18,
    createdAt: "2일 전",
  },
  {
    id: "r7",
    author: "ocean_coder",
    cityName: "부산 해운대",
    cityId: "busan-haeundae",
    rating: 5,
    content: "바다 보면서 코딩하는 기분은 정말 최고예요!",
    helpful: 32,
    createdAt: "4일 전",
  },
  {
    id: "r8",
    author: "starry_night",
    cityName: "부산 광안리",
    cityId: "busan-gwangan",
    rating: 4,
    content: "야경이 정말 예뻐요. 밤에 산책하기 좋습니다.",
    helpful: 14,
    createdAt: "3일 전",
  },
  {
    id: "r9",
    author: "jeju_lover",
    cityName: "제주 서귀포",
    cityId: "jeju-seogwipo",
    rating: 5,
    content: "서귀포는 조용하고 집중하기 정말 좋은 곳입니다.",
    helpful: 21,
    createdAt: "1주일 전",
  },
  {
    id: "r10",
    author: "it_specialist",
    cityName: "서울 홍대",
    cityId: "seoul-hongdae",
    rating: 4,
    content: "활기가 넘치는 곳이에요. 젊은 에너지를 받기 좋습니다.",
    helpful: 9,
    createdAt: "5일 전",
  },
  // 추가 리뷰 데이터 생략 (총 30개 이상 가정을 위해 더 추가 가능)
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `r-extra-${i}`,
    author: `user_${i}`,
    cityName: CITIES[i % CITIES.length].name,
    cityId: CITIES[i % CITIES.length].id,
    rating: Math.floor(Math.random() * 2) + 4,
    content: "분위기 좋고 작업하기 편리한 곳입니다. 추천해요!",
    helpful: Math.floor(Math.random() * 20),
    createdAt: `${i + 1}일 전`,
  })),
];

export const getCityById = (id: string) => CITIES.find((c) => c.id === id);

export const getReviewsByCityId = (cityId: string) => 
  ALL_REVIEWS.filter((r) => r.cityId === cityId);

export const getRelatedCities = (city: City) =>
  CITIES.filter((c) => c.region === city.region && c.id !== city.id).slice(0, 4);

export const HOT_POSTS: CommunityPost[] = [
  {
    id: "p1",
    category: "후기",
    title: "제주 한 달 살기 후기 총정리",
    content: "제주도 서귀포에서 한 달 동안 워케이션을 다녀왔습니다. 정말 최고의 경험이었어요!",
    author: "jeju_lover",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jeju_lover",
    cityId: "jeju-seogwipo",
    likes: 128,
    comments: 3,
    createdAt: "2시간 전",
  },
  {
    id: "p2",
    category: "정보",
    title: "강릉 카페거리 추천 TOP 10",
    content: "강릉에서 작업하기 좋은 카페 10곳을 골라봤습니다. 와이파이 속도 위주로 정리했어요.",
    author: "coding_bear",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=coding_bear",
    cityId: "gangneung",
    likes: 94,
    comments: 2,
    createdAt: "5시간 전",
  },
  {
    id: "p3",
    category: "질문",
    title: "부산 vs 제주, 어디가 더 좋아요?",
    content: "다음 주에 일주일 정도 내려가 있으려고 하는데 어디가 더 작업하기 좋을까요?",
    author: "wandercode",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wandercode",
    likes: 76,
    comments: 5,
    createdAt: "어제",
  },
];

export const ALL_POSTS: CommunityPost[] = [
  ...HOT_POSTS,
  {
    id: "p4",
    category: "모임",
    title: "대전 노마드 모임 같이 하실 분?",
    content: "이번 주 토요일 대전 둔산동에서 같이 작업하실 분 구합니다!",
    author: "tech_wiz",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech_wiz",
    cityId: "daejeon-dunsan",
    likes: 52,
    comments: 0,
    createdAt: "어제",
  },
  // 20개 이상 생성을 위한 데이터
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `p-extra-${i}`,
    category: (["후기", "질문", "모임", "정보"] as const)[i % 4],
    title: `노마드 라이프 ${i + 5}일차 기록`,
    content: "오늘도 열심히 코딩하고 있습니다. 노마드 코리아 화이팅!",
    author: `user_${i}`,
    authorAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user_${i}`,
    likes: Math.floor(Math.random() * 50),
    comments: Math.floor(Math.random() * 10),
    createdAt: `${i + 2}일 전`,
  })),
];

export const ALL_COMMENTS: PostComment[] = [
  {
    id: "c1",
    postId: "p1",
    author: "nomad_king",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nomad_king",
    content: "와 저도 꼭 가보고 싶네요! 정보 감사합니다.",
    createdAt: "1시간 전",
    replies: [
      {
        id: "c1-1",
        postId: "p1",
        author: "jeju_lover",
        content: "강추드립니다! 정말 좋아요.",
        createdAt: "30분 전",
      }
    ]
  },
  {
    id: "c2",
    postId: "p1",
    author: "remote_dev",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=remote_dev",
    content: "서귀포 숙소는 어디로 잡으셨나요?",
    createdAt: "2시간 전",
  }
];

export interface Notification {
  id: string;
  type: "like" | "comment" | "new_city";
  content: string;
  targetUrl: string;
  createdAt: string;
  isRead: boolean;
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    type: "like",
    content: "울 오빠님이 당신의 게시글을 좋아합니다! ✨",
    targetUrl: "/community/p1",
    createdAt: "5분 전",
    isRead: false,
  },
  {
    id: "n2",
    type: "comment",
    content: "nomad_king님이 당신의 게시글에 댓글을 남겼습니다: '정말 유익해요!'",
    targetUrl: "/community/p1",
    createdAt: "30분 전",
    isRead: false,
  },
  {
    id: "n3",
    type: "new_city",
    content: "새로운 노마드 추천 도시 '제주 애월'이 추가되었습니다! 🍊",
    targetUrl: "/cities/jeju-aewol",
    createdAt: "2시간 전",
    isRead: true,
  },
  ...Array.from({ length: 7 }).map((_, i) => ({
    id: `n-extra-${i}`,
    type: (["like", "comment"] as const)[i % 2],
    content: `user_${i}님이 활동을 남겼습니다.`,
    targetUrl: "/community",
    createdAt: `${i + 1}일 전`,
    isRead: i > 2,
  })),
];

export const getPostById = (id: string) => ALL_POSTS.find(p => p.id === id);
export const getCommentsByPostId = (postId: string) => ALL_COMMENTS.filter(c => c.postId === postId);

export const REGION_TABS = [
  { label: "전체", count: 32 },
  { label: "수도권", count: 6 },
  { label: "경상", count: 7 },
  { label: "전라", count: 5 },
  { label: "강원", count: 5 },
  { label: "충청", count: 6 },
  { label: "제주", count: 3 },
];

export const USER = {
  id: "u1",
  name: "카리나",
  email: "karina@aespa.com",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=karina",
  joinedAt: "2024.01.12",
  followers: 1250,
  following: 890,
  stats: {
    reviews: 12,
    favorites: 8,
    visited: 5,
  },
};

export const MY_FAVORITES: City[] = [
  CITIES[0], // 성수동
  CITIES[3], // 해운대
  CITIES[5], // 서귀포
];

export const MY_REVIEWS: Review[] = ALL_REVIEWS.filter(r => r.author === "remote_dev" || r.author === "nomad_king").slice(0, 3);

export const QUICK_CITIES = [
  { emoji: "🏙️", name: "서울" },
  { emoji: "🌊", name: "부산" },
  { emoji: "🍊", name: "제주" },
  { emoji: "🌿", name: "전주" },
  { emoji: "🌊", name: "강릉" },
];
