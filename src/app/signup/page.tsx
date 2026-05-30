"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
  alert("Account created successfully!");

  window.location.href = "/login";
} else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
        <div className="text-center mb-8">

          <Link href="/" className="flex justify-center mb-4">
            <Image
              src="/logo.svg"
              alt="Foodiego Logo"
              width={180}
              height={60}
            />
          </Link>

          <h2 className="mt-6 text-2xl font-bold text-dark">
            Create an account
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Join us to start ordering delicious meals.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            icon={<User className="h-5 w-5" />}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={<Mail className="h-5 w-5" />}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+234 XXX XXX XXXX"
            icon={<Phone className="h-5 w-5" />}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
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

          <Button type="submit" fullWidth size="lg" className="mt-2">
            Create Account
          </Button>

        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/80"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}