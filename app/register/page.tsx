import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { signup } from "@/app/auth/actions";
import RegisterError from "./RegisterError";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-md shadow-lg border-emerald-100/50">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold tracking-tight">
              Nomad<span className="text-emerald-600">Korea</span>
            </span>
          </Link>
          <CardTitle className="text-2xl font-bold text-center">회원가입</CardTitle>
          <CardDescription className="text-center">
            NomadKorea의 새로운 노마드가 되어보세요!
          </CardDescription>
        </CardHeader>
        <form action={signup}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium leading-none">
                이름
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="홍길동"
                required
                className="border-emerald-100 focus-visible:ring-emerald-600"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                이메일
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                className="border-emerald-100 focus-visible:ring-emerald-600"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium leading-none">
                비밀번호
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="border-emerald-100 focus-visible:ring-emerald-600"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="confirm-password" className="text-sm font-medium leading-none">
                비밀번호 확인
              </label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="border-emerald-100 focus-visible:ring-emerald-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
            >
              회원가입하기
            </Button>
            <Suspense>
              <RegisterError />
            </Suspense>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-center text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Link
              href="/login"
              className="text-emerald-600 hover:underline underline-offset-4 font-medium"
            >
              로그인
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
