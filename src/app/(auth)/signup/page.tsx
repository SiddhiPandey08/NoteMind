"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { MailCheck, TriangleAlert } from "lucide-react";
import { actionSignUpUser } from "@/lib/server-action/auth-action";

const SignUpFormSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const searchParams = useSearchParams();

  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const isError = Boolean(codeExchangeError);
  const isDone = confirmation || isError;

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof SignUpFormSchema>) => {
    const { error } = await actionSignUpUser({ email, password });
    if (error) {
      setSubmitError(error.message);
      form.reset();
      return;
    }
    setConfirmedEmail(email);
    setConfirmation(true);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full sm:w-[440px] bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-sm">
        <Form {...form}>
          <form
            onChange={() => {
              if (submitError) setSubmitError("");
            }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 flex flex-col"
          >
            <Link href="/" className="w-full flex justify-start items-center">
              <span className="font-heading text-foreground text-3xl sm:text-4xl">
                Evernotes.
              </span>
            </Link>

            {!isDone && (
              <>
                <FormDescription className="text-muted-foreground text-sm -mt-2">
                  An all-in-one collaboration and productivity platform
                </FormDescription>

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-sm font-medium">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Username"
                          disabled={isLoading}
                          className="h-11 rounded-xl bg-input/30 border-input focus-visible:ring-ring"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          disabled={isLoading}
                          className="h-11 rounded-xl bg-input/30 border-input focus-visible:ring-ring"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-sm font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          disabled={isLoading}
                          className="h-11 rounded-xl bg-input/30 border-input focus-visible:ring-ring"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-sm font-medium">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          disabled={isLoading}
                          className="h-11 rounded-xl bg-input/30 border-input focus-visible:ring-ring"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {!isLoading ? "Create Account" : "Creating your account..."}
                </Button>

                {submitError && (
                  <FormMessage className="text-destructive text-sm text-center">
                    {submitError}
                  </FormMessage>
                )}

                <span className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary font-medium hover:underline"
                  >
                    Login
                  </Link>
                </span>
              </>
            )}

            {isDone && (
              <div className="flex flex-col items-center text-center py-2">
                <div
                  className={
                    isError
                      ? "flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10"
                      : "flex h-16 w-16 items-center justify-center rounded-full bg-accent/15"
                  }
                >
                  {isError ? (
                    <TriangleAlert className="h-8 w-8 text-destructive" />
                  ) : (
                    <MailCheck className="h-8 w-8 text-accent-foreground" />
                  )}
                </div>

                <h2 className="mt-5 font-heading text-2xl text-foreground">
                  {isError ? "Invalid link" : "Check your inbox"}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground max-w-[320px]">
                  {isError
                    ? codeExchangeError
                    : `We've sent a confirmation link to ${
                        confirmedEmail || "your email"
                      }. Click it to activate your account.`}
                </p>

                {!isError && (
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    Didn&apos;t get it? Check your spam folder.
                  </p>
                )}

                <Link href="/login" className="w-full mt-7">
                  <Button
                    variant="outline"
                    className="w-full h-11 rounded-xl border-border"
                  >
                    Back to login
                  </Button>
                </Link>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};
export default SignUpPage;
