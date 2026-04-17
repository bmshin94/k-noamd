import { City, Review, CommunityPost } from "@/types";

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
    cityName: "제주 서귀포",
    rating: 5,
    content: "와이파이 빠르고 카페 분위기도 최고에요!",
    createdAt: "2시간 전",
  },
  {
    id: "r2",
    author: "코딩하는곰",
    cityName: "강릉 시내",
    rating: 4,
    content: "커피거리 완전 감성 넘쳐요 ㅎㅎ 추천!",
    createdAt: "5시간 전",
  },
  {
    id: "r3",
    author: "wandercode",
    cityName: "전주 한옥마을",
    rating: 5,
    content: "물가 저렴하고 분위기 너무 좋아요 재방문 예정",
    createdAt: "어제",
  },
];

export const HOT_POSTS: CommunityPost[] = [
  {
    id: "p1",
    title: "제주 한 달 살기 후기 총정리",
    likes: 128,
    comments: 34,
    createdAt: "2시간 전",
  },
  {
    id: "p2",
    title: "강릉 카페거리 추천 TOP 10",
    likes: 94,
    comments: 21,
    createdAt: "5시간 전",
  },
  {
    id: "p3",
    title: "부산 vs 제주, 어디가 더 좋아요?",
    likes: 76,
    comments: 58,
    createdAt: "어제",
  },
  {
    id: "p4",
    title: "대전 노마드 모임 같이 하실 분?",
    likes: 52,
    comments: 17,
    createdAt: "어제",
  },
];

export const REGION_TABS = [
  { label: "전체", count: 32 },
  { label: "수도권", count: 6 },
  { label: "경상", count: 7 },
  { label: "전라", count: 5 },
  { label: "강원", count: 5 },
  { label: "충청", count: 6 },
  { label: "제주", count: 3 },
];

export const QUICK_CITIES = [
  { emoji: "🏙️", name: "서울" },
  { emoji: "🌊", name: "부산" },
  { emoji: "🍊", name: "제주" },
  { emoji: "🌿", name: "전주" },
  { emoji: "🌊", name: "강릉" },
];
