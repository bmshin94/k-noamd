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
import { login } from "@/app/auth/actions";
import LoginError from "./LoginError";

function LoginForm() {
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
          <CardTitle className="text-2xl font-bold text-center">로그인</CardTitle>
          <CardDescription className="text-center">
            이메일과 비밀번호를 입력하여 계정에 접속하세요.
          </CardDescription>
        </CardHeader>
        <form action={login}>
          <CardContent className="grid gap-4">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none">
                  비밀번호
                </label>
                <Link
                  href="#"
                  className="text-xs text-emerald-600 hover:underline underline-offset-4"
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="border-emerald-100 focus-visible:ring-emerald-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
            >
              로그인하기
            </Button>
            <Suspense>
              <LoginError />
            </Suspense>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-center text-muted-foreground">
            계정이 없으신가요?{" "}
            <Link
              href="/register"
              className="text-emerald-600 hover:underline underline-offset-4 font-medium"
            >
              회원가입
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return <LoginForm />;
}
