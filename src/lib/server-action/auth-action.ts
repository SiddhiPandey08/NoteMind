"use server";

import { z } from "zod";
import { FormSchema } from "@/lib/types";
import { createClient } from "@/lib/supabase/server";

export async function loginAction({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, user: data.user };
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  });

  if (error) {
    return { data: null, error: { message: error.message } };
  }

  return { data, error: null };
}
