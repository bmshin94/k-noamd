import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 pt-12">
      <Button variant="outline" size="icon" disabled className="w-10 h-10 rounded-xl">
        <ChevronLeft className="w-4 h-4" />
        <span className="sr-only">이전 페이지</span>
      </Button>
      
      {[1, 2, 3, 4, 5].map((page) => (
        <Button
          key={page}
          variant={page === 1 ? "default" : "outline"}
          className={`w-10 h-10 rounded-xl font-bold ${
            page === 1 ? "bg-primary text-white shadow-md shadow-primary/20" : "text-slate-500 hover:text-primary"
          }`}
        >
          {page}
        </Button>
      ))}

      <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl">
        <ChevronRight className="w-4 h-4" />
        <span className="sr-only">다음 페이지</span>
      </Button>
    </div>
  );
}
