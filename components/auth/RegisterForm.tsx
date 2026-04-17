"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.nickname) newErrors.nickname = "닉네임을 입력해주세요.";
    if (!formData.email) newErrors.email = "이메일을 입력해주세요.";
    if (!formData.password) newErrors.password = "비밀번호를 입력해주세요.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = "약관에 동의해주세요.";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("회원가입 시도:", formData);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-5 w-full">
      <div className="space-y-2">
        <Label htmlFor="nickname" className={errors.nickname ? "text-destructive" : ""}>
          닉네임
        </Label>
        <Input
          id="nickname"
          placeholder="노마드코리아"
          value={formData.nickname}
          onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
          className={errors.nickname ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.nickname && (
          <p className="text-xs text-destructive font-medium">{errors.nickname}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
          이메일
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="nomad@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.email && (
          <p className="text-xs text-destructive font-medium">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
          비밀번호
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.password && (
          <p className="text-xs text-destructive font-medium">{errors.password}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-destructive" : ""}>
          비밀번호 확인
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          className={errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive font-medium">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox
          id="terms"
          checked={formData.agreeTerms}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, agreeTerms: !!checked })
          }
          className={errors.agreeTerms ? "border-destructive" : ""}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className={`text-xs font-medium cursor-pointer ${
              errors.agreeTerms ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            서비스 이용약관 및 개인정보 처리방침에 동의합니다.
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full h-12 text-base font-bold mt-2">
        가입하기
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{" "}
        <Link
          href="/login"
          className="text-primary font-bold hover:underline underline-offset-4"
        >
          로그인
        </Link>
      </div>
    </form>
  );
}
