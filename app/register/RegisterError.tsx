"use client";

import { useSearchParams } from "next/navigation";

export default function RegisterError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) return null;

  return (
    <p className="text-sm text-red-500 text-center mt-2">
      {error === "true"
        ? "회원가입 중에 문제가 생겼어요! 다시 확인해주세요! 😭"
        : "입력 정보가 올바르지 않아요! 🤔"}
    </p>
  );
}
