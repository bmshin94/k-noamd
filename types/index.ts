export interface City {
  id: string;
  name: string;
  district: string;
  region: "수도권" | "경상" | "전라" | "강원" | "충청" | "제주";
  imageUrl: string;
  rating: number;
  reviewCount: number;
  scores: {
    wifi: number;
    cafe: number;
    price: number;
    transport: number;
  };
  tags: string[];
  rank?: 1 | 2 | 3;
}

export interface Review {
  id: string;
  author: string;
  avatarUrl?: string;
  cityName: string;
  cityId: string;
  rating: number;
  content: string;
  helpful: number;
  createdAt: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  likes: number;
  comments: number;
  createdAt: string;
}
