"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) newErrors.email = "이메일을 입력해주세요.";
    if (!password) newErrors.password = "비밀번호를 입력해주세요.";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("로그인 시도:", { email, password });
      // 실제 로그인은 추후 구현!
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-full space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
          이메일
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="nomad@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-xs font-medium text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
            비밀번호
          </Label>
          <Link
            href="/forgot-password"
            className="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.password && (
          <p id="password-error" role="alert" className="text-xs font-medium text-destructive">
            {errors.password}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full h-12 text-base font-bold">
        로그인
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        아직 회원이 아니신가요?{" "}
        <Link
          href="/register"
          className="text-primary font-bold hover:underline underline-offset-4"
        >
          회원가입
        </Link>
      </div>
    </form>
  );
}
