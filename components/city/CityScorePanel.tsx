import { City } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Coffee, Banknote, Car } from "lucide-react";

interface CityScorePanelProps {
  city: City;
}

export default function CityScorePanel({ city }: CityScorePanelProps) {
  const scoreItems = [
    { label: "초고속 와이파이", score: city.scores.wifi, icon: <Wifi className="w-4 h-4" /> },
    { label: "쾌적한 카페", score: city.scores.cafe, icon: <Coffee className="w-4 h-4" /> },
    { label: "합리적 물가", score: city.scores.price, icon: <Banknote className="w-4 h-4" /> },
    { label: "대중교통 편의", score: city.scores.transport, icon: <Car className="w-4 h-4" /> },
  ];

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="bg-slate-50/50">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          도시 상세 리포트
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-8 px-6 pb-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Total Score Circle */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-32 rounded-full border-[10px] border-primary flex flex-col items-center justify-center bg-primary/5">
              <span className="text-4xl font-black text-primary">{city.rating}</span>
              <span className="text-xs font-bold text-primary opacity-70">TOTAL SCORE</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">노마드 추천 지수</p>
          </div>

          {/* Individual Scores */}
          <div className="flex-1 w-full space-y-6">
            {scoreItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-slate-100 rounded-md text-slate-600">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-primary">{item.score.toFixed(1)} / 5.0</span>
                </div>
                <Progress value={(item.score / 5) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
