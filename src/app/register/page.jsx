"use client";

import { signIn, signOut, signUp } from "@/lib/auth-client";
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
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const [role, setRole] = useState("freelancer");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    const toastId = toast.loading("Creating account...");

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      const res = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.image || undefined,
        role,
      });

      if (res?.error) {
        toast.error(res.error.message || "Failed to create account", {
          id: toastId,
        });
        return;
      }

      await signOut();

      toast.success("Account created. Please login.", {
        id: toastId,
      });

      router.replace("/login");
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
        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
              Create Account
            </p>

            <h1 className="text-3xl font-bold text-white">
              Join Task<span className="text-cyan-400">Forge</span>
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sign up as a client or freelancer and start working on
              micro-tasks.
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="name">
              <Label className="text-slate-200">Full Name</Label>
              <Input placeholder="John Smith" />
              <FieldError className="text-red-400" />
            </TextField>

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
              <Input placeholder="john@example.com" />
              <FieldError className="text-red-400" />
            </TextField>

            <TextField name="image" type="url">
              <Label className="text-slate-200">Image URL</Label>
              <Input placeholder="https://example.com/photo.jpg" />
              <Description className="text-slate-500">
                Optional. Add a profile image URL.
              </Description>
              <FieldError className="text-red-400" />
            </TextField>

            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain one uppercase letter";
                }

                if (!/[a-z]/.test(value)) {
                  return "Password must contain one lowercase letter";
                }

                return null;
              }}
            >
              <Label className="text-slate-200">Password</Label>
              <Input placeholder="Create password" />
              <Description className="text-slate-500">
                Minimum 6 characters with uppercase and lowercase letters.
              </Description>
              <FieldError className="text-red-400" />
            </TextField>

            <input type="hidden" name="role" value={role} />

            <div className="space-y-3">
              <Label className="text-slate-200">Account Type</Label>

              <div className="flex rounded-xl border border-slate-800 bg-slate-950 p-1">
                <button
                  type="button"
                  onClick={() => setRole("freelancer")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition ${
                    role === "freelancer"
                      ? "bg-cyan-500 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Freelancer
                </button>

                <button
                  type="button"
                  onClick={() => setRole("client")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition ${
                    role === "client"
                      ? "bg-cyan-500 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Client
                </button>
              </div>

              <p className="text-xs text-slate-500">
                Select how you want to use TaskForge.
              </p>
            </div>

            <Button
              type="submit"
              isDisabled={isLoading}
              className="mt-2 w-full bg-cyan-500 font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
              <Check />
              {isLoading ? "Creating Account..." : "Create Account"}
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
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-cyan-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
