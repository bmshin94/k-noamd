import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Heart, MapPin } from "lucide-react";
import { USER } from "@/lib/mock-data";

export default function MyStats() {
  const statsItems = [
    {
      label: "내 리뷰",
      value: USER.stats.reviews,
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      label: "즐겨찾기",
      value: USER.stats.favorites,
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      bgColor: "bg-rose-50",
    },
    {
      label: "방문 도시",
      value: USER.stats.visited,
      icon: <MapPin className="w-5 h-5 text-emerald-500" />,
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statsItems.map((item) => (
        <Card key={item.label} className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
              <p className="text-3xl font-black text-slate-900">{item.value.toLocaleString()}</p>
            </div>
            <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
              {item.icon}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
