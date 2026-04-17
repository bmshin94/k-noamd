"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  try {
    console.log("로그인 시도 중... ✨");
    const supabase = await createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    console.log("이메일:", data.email);

    if (!data.email || !data.password) {
      console.error("이메일 또는 비밀번호가 누락되었습니다! 😭");
      return redirect("/login?error=missing_fields");
    }

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      console.error("로그인 에러 발생! 😭", error.message);
      return redirect("/login?error=true");
    }

    console.log("로그인 성공! 💖");
    revalidatePath("/", "layout");
  } catch (err) {
    console.error("로그인 프로세스 중 예상치 못한 에러! 😭", err);
    return redirect("/login?error=internal");
  }
  redirect("/");
}

export async function signup(formData: FormData) {
  try {
    console.log("회원가입 시도 중... ✨");
    console.log("SUPABASE_URL 확인:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "설정됨! ✅" : "미설정! ❌");
    const supabase = await createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    console.log("이메일:", data.email);

    if (!data.email || !data.password) {
      console.error("이메일 또는 비밀번호가 누락되었습니다! 😭");
      return redirect("/register?error=missing_fields");
    }

    const { error } = await supabase.auth.signUp(data);

    if (error) {
      console.error("회원가입 에러 발생! 😭", error.message);
      return redirect("/register?error=true");
    }

    console.log("회원가입 성공! 💖");
    revalidatePath("/", "layout");
  } catch (err) {
    console.error("회원가입 프로세스 중 예상치 못한 에러! 😭", err);
    return redirect("/register?error=internal");
  }
  redirect("/");
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}
