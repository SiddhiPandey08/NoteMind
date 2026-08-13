"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Sparkles, ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Loader from "@/components/global/Loader";
// import { Separator } from "@/components/ui/separator";
// import { actionLoginUser } from "@/lib/server-actions/auth-actions";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData,
  ) => {
    // const { error } = await actionLoginUser(formData);
    // if (error) {
    //   form.reset();
    //   setSubmitError(error.message);
    // }
    router.replace("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-card/70 shadow-[0_30px_100px_-50px_rgba(15,23,42,0.35)] lg:grid-cols-[1.05fr_0.95fr]">
        <aside className="relative isolate hidden flex-col justify-between overflow-hidden border-border/70 bg-[radial-gradient(circle_at_top_left,_rgba(42,157,143,0.22),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(15,23,42,0.88))] p-10 text-white lg:flex">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.06),transparent_40%)]" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            <Sparkles className="size-4 text-primary" />
            Note Mind
          </div>
          <div className="max-w-md">
            <h1 className="text-5xl font-semibold tracking-tight text-balance">
              Sign in to pick up exactly where your notes left off.
            </h1>
            <p className="mt-5 text-base leading-7 text-white/70">
              A focused workspace for capturing ideas, reviewing drafts, and
              keeping your work organized without extra friction.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              Fast login flow with a clean, minimal surface.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              Built to keep focus on the content, not the chrome.
            </div>
          </div>
        </aside>

        <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:p-12">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="size-4" />
              </span>
              Note Mind
            </Link>

            <div className="mt-8 space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Welcome back
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Log in to continue building and organizing your notes.
              </p>
            </div>

            <Form {...form}>
              <form
                onChange={() => {
                  if (submitError) setSubmitError("");
                }}
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between gap-4">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/signup"
                          className="text-xs font-medium text-primary transition hover:text-primary/80"
                        >
                          Need an account?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError && <FormMessage>{submitError}</FormMessage>}

                <div className="flex items-center justify-between gap-4 pt-2">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-border text-primary focus:ring-ring/30"
                    />
                    Remember me
                  </label>
                  <Link
                    href="/signup"
                    className="text-sm font-medium text-primary transition hover:text-primary/80"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  size="lg"
                  disabled={isLoading}
                >
                  Sign in
                  <ArrowRight className="size-4" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="font-medium text-primary">
                    Sign up
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
