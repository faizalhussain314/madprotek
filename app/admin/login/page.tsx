"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShieldCheck, Lock, Mail, ArrowRight, Sparkles, Key } from "lucide-react";
import Button from "@/components/ui/Button";
import { ButtonSpinner } from "@/components/ui/LoadingKit";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFillDemo = () => {
    setEmail("admin@madprotek.com");
    setPassword("admin123");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/admin";
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err: any) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-[0_0_25px_rgba(249,185,0,0.2)] mx-auto flex items-center justify-center p-2.5">
            <Image
              src="/images/m-word-logo-white.png"
              alt="MadProTek Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(249,185,0,0.4)]"
            />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white pt-2">
            MadProTek <span className="text-brand-yellow">Admin</span> Console
          </h1>
          <p className="text-xs text-brand-muted font-normal">
            Manage corporate events, lead submissions, and participant registrations.
          </p>
        </div>

        {/* Demo Credentials Alert Banner */}
        <div className="p-4 rounded-2xl bg-brand-yellow-subtle/20 border border-brand-yellow/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-brand-yellow tracking-wider flex items-center space-x-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>DEMO LOGIN CREDENTIALS</span>
            </span>
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-[11px] font-extrabold px-3 py-1 rounded-lg bg-brand-yellow text-brand-black hover:bg-brand-yellow-bright transition-colors cursor-pointer"
            >
              Autofill Demo
            </button>
          </div>
          <div className="text-xs text-gray-300 space-y-0.5 font-mono">
            <p>Email: <strong className="text-white">admin@madprotek.com</strong></p>
            <p>Password: <strong className="text-white">admin123</strong></p>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="email"
                  required
                  placeholder="admin@madprotek.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 bg-neutral-800 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 bg-neutral-800 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-brand-yellow text-brand-black font-extrabold text-sm sm:text-base hover:bg-brand-yellow-bright transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <ButtonSpinner size="md" color="border-brand-black" />
                    <span>Authenticating Admin...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>Sign In to Admin Panel</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="text-[11px] text-center text-neutral-500 font-medium">
          🔒 Secure MySQL Backed Admin Authorization System
        </p>
      </div>
    </div>
  );
}
