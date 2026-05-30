"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");

        window.location.href = "/";
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);

      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
        <div className="text-center mb-8">

          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="FoodieGo Logo"
              width={160}
              height={60}
            />
          </Link>

          <h2 className="mt-6 text-2xl font-bold text-dark">
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Please enter your details to sign in.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<Mail className="h-5 w-5" />}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">

            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              icon={<Lock className="h-5 w-5" />}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />

              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary hover:text-primary/80"
              >
                Forgot your password?
              </a>
            </div>

          </div>

          <Button type="submit" fullWidth size="lg">
            Sign In
          </Button>

        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}

            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary/80"
            >
              Sign up
            </Link>

          </p>
        </div>
      </div>
    </div>
  );
}