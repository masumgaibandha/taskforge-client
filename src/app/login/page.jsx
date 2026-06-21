"use client";

import { signIn, useSession } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPending) return;

    if (session?.user?.role === "client") {
      router.replace("/dashboard/client");
    } else if (session?.user?.role === "freelancer") {
      router.replace("/dashboard/freelancer");
    } else if (session?.user?.role === "admin") {
      router.replace("/dashboard/admin");
    }
  }, [session, isPending, router]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const toastId = toast.loading("Logging in...");

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      const res = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        toast.error(res.error.message || "Invalid email or password", {
          id: toastId,
        });
        return;
      }

      toast.success("Logged in successfully", {
        id: toastId,
      });

      router.replace("/dashboard");
      router.refresh();
    } catch (error) {
      toast.error(error?.message || "Something went wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="container relative mx-auto flex min-h-[75vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
              Welcome Back
            </p>

            <h1 className="text-3xl font-bold text-white">
              Login to Task<span className="text-cyan-400">Forge</span>
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Access your dashboard, manage tasks, proposals, and payments.
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-slate-200">Email Address</Label>
              <Input
                placeholder="john@example.com"
                className="text-slate-600"
              />
              <FieldError className="text-red-400" />
            </TextField>

            <TextField isRequired minLength={6} name="password" type="password">
              <Label className="text-slate-200">Password</Label>
              <Input
                placeholder="Enter your password"
                className="text-slate-600"
              />
              <Description className="text-slate-500">
                Enter the password you used when creating your account.
              </Description>
              <FieldError className="text-red-400" />
            </TextField>

            <Button
              type="submit"
              isDisabled={isLoading || isPending}
              className="mt-2 w-full bg-cyan-500 font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
              <Check />
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <Button
              type="button"
              variant="bordered"
              onPress={handleGoogleLogin}
              className="w-full border-slate-700 font-medium text-slate-200"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </Button>
          </Form>

          <p className="mt-8 text-center text-sm text-slate-400">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-cyan-400">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
