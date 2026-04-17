"use client";

import { useSearchParams } from "next/navigation";

export default function LoginError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) return null;

  return (
    <p className="text-sm text-red-500 text-center mt-2">
      이메일 또는 비밀번호가 올바르지 않아요! 😭
    </p>
  );
}
