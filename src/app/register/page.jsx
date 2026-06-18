"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Header,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [role, setRole] = useState("client");

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    data.role = role;

    console.log(data);
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
              <Input placeholder="John Smith" className="text-slate-100" />
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
              <Input
                placeholder="john@example.com"
                className="text-slate-100"
              />
              <FieldError className="text-red-400" />
            </TextField>

            <TextField isRequired name="image" type="url">
              <Label className="text-slate-200">Image URL</Label>
              <Input
                placeholder="https://example.com/photo.jpg"
                className="text-slate-100"
              />
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
              <Input placeholder="Create password" className="text-slate-100" />
              <Description className="text-slate-500">
                Minimum 6 characters with uppercase and lowercase letters.
              </Description>
              <FieldError className="text-red-400" />
            </TextField>

            <input type="hidden" name="role" value={role} />

            <Select
              selectedKey={role}
              onSelectionChange={(key) => setRole(key)}
              className="w-full"
            >
              <Label className="text-slate-200">Account Type</Label>

              <Select.Trigger className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-left text-slate-200 outline-none transition hover:border-cyan-500">
                <Select.Value>
                  {role === "client" ? "Client" : "Freelancer"}
                </Select.Value>
                <Select.Indicator className="text-slate-400" />
              </Select.Trigger>

              <Description className="text-slate-500">
                Select how you want to use TaskForge.
              </Description>

              <Select.Popover className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-xl">
                <ListBox>
                  <ListBox.Section>
                    <Header className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Choose Role
                    </Header>

                    <ListBox.Item
                      id="client"
                      textValue="Client"
                      onAction={() => setRole("client")}
                      className="rounded-lg px-3 py-3 text-slate-200 transition hover:bg-slate-800"
                    >
                      <Label>Client</Label>
                      <Description className="text-slate-500">
                        Post tasks and hire freelancers.
                      </Description>
                      <ListBox.ItemIndicator className="text-cyan-400" />
                    </ListBox.Item>

                    <ListBox.Item
                      id="freelancer"
                      textValue="Freelancer"
                      onAction={() => setRole("freelancer")}
                      className="rounded-lg px-3 py-3 text-slate-200 transition hover:bg-slate-800"
                    >
                      <Label>Freelancer</Label>
                      <Description className="text-slate-500">
                        Find tasks and earn from your skills.
                      </Description>
                      <ListBox.ItemIndicator className="text-cyan-400" />
                    </ListBox.Item>
                  </ListBox.Section>
                </ListBox>
              </Select.Popover>
            </Select>

            <Button
              type="submit"
              className="mt-2 w-full bg-cyan-500 font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
              <Check />
              Create Account
            </Button>

            <Button
              type="button"
              variant="bordered"
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
