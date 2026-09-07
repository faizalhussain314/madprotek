"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Calendar, Inbox, Users, LogOut, ChevronRight, Menu, X, Sun, Moon, ShieldCheck } from "lucide-react";
import { AdminThemeProvider, useAdminTheme } from "@/context/AdminThemeContext";
import { OrbitalSpinner } from "@/components/ui/LoadingKit";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useAdminTheme();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";
  const isLight = theme === "light";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/me");
        const data = await res.json();
        if (data.authenticated) {
          setUser(data.user);
        } else {
          router.push("/admin/login");
        }
      } catch (err) {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center font-sans ${isLight ? "bg-slate-100 text-slate-900" : "bg-neutral-950 text-white"}`}>
        <div className="flex flex-col items-center space-y-6 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl">
          <OrbitalSpinner size="lg" />
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-yellow" />
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-brand-yellow">
                MADPROTEK ADMIN CONSOLE
              </p>
            </div>
            <p className="text-[11px] font-mono text-neutral-400 tracking-wider">
              VERIFYING CREDENTIALS & SESSIONS...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Manage Events", href: "/admin/events", icon: Calendar },
    { label: "Lead Submissions", href: "/admin/leads", icon: Inbox },
    { label: "Event Registrations", href: "/admin/registrations", icon: Users },
  ];

  return (
    <div className={`min-h-screen flex flex-col md:flex-row font-sans transition-colors duration-300 ${isLight ? "bg-slate-100 text-slate-900" : "bg-neutral-950 text-white"}`}>
      {/* Mobile Header Bar */}
      <div className={`md:hidden flex items-center justify-between p-4 border-b z-30 ${isLight ? "bg-white border-slate-200" : "bg-neutral-900 border-neutral-800"}`}>
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center p-1 border shadow-sm ${
            isLight ? "bg-white border-slate-200" : "bg-neutral-800/90 border-neutral-700"
          }`}>
            <Image
              src={isLight ? "/images/m-word-logo.png" : "/images/m-word-logo-white.png"}
              alt="MadProTek"
              width={26}
              height={26}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-extrabold text-sm tracking-tight">MadProTek Admin</span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Theme Slider Toggle Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            title={`Switch to ${isLight ? "Dark" : "Bright"} Mode`}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ease-in-out focus:outline-none p-0.5 items-center ${
              isLight ? "bg-amber-400" : "bg-neutral-700"
            }`}
          >
            <span
              className={`pointer-events-none flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                isLight ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {isLight ? (
                <Sun className="h-3 w-3 text-amber-600 shrink-0" />
              ) : (
                <Moon className="h-3 w-3 text-neutral-900 shrink-0" />
              )}
            </span>
          </button>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 rounded-lg cursor-pointer ${isLight ? "bg-slate-100 text-slate-700" : "bg-neutral-800 text-gray-300"}`}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 border-r flex flex-col justify-between transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${isLight ? "bg-white border-slate-200 text-slate-900" : "bg-neutral-900 border-neutral-800 text-white"}`}
      >
        <div className="p-6 space-y-6">
          {/* Logo & Theme Switcher */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center p-1.5 shadow-sm border ${
                isLight ? "bg-white border-slate-200" : "bg-neutral-800/90 border-neutral-700"
              }`}>
                <Image
                  src={isLight ? "/images/m-word-logo.png" : "/images/m-word-logo-white.png"}
                  alt="MadProTek"
                  width={34}
                  height={34}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-extrabold text-base tracking-tight leading-tight">MadProTek</h2>
                <span className="text-[10px] font-black uppercase text-brand-yellow-dark tracking-wider">ADMIN CONTROL</span>
              </div>
            </div>

            {/* Visual Slider Switch Toggle Beside Logo */}
            <button
              type="button"
              onClick={toggleTheme}
              title={`Switch to ${isLight ? "Dark" : "Bright"} Mode`}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ease-in-out focus:outline-none p-0.5 items-center ${
                isLight ? "bg-amber-400" : "bg-neutral-700"
              }`}
            >
              <span
                className={`pointer-events-none flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                  isLight ? "translate-x-5" : "translate-x-0"
                }`}
              >
                {isLight ? (
                  <Sun className="h-3 w-3 text-amber-600 shrink-0" />
                ) : (
                  <Moon className="h-3 w-3 text-neutral-900 shrink-0" />
                )}
              </span>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-brand-yellow text-brand-black shadow-md font-extrabold"
                      : isLight
                      ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      : "text-gray-400 hover:bg-neutral-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4 text-brand-black" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile & Logout */}
        <div className={`p-4 m-4 rounded-2xl border space-y-3 ${
          isLight ? "bg-slate-50 border-slate-200" : "bg-neutral-800/80 border-neutral-700"
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center font-extrabold text-xs shadow-2xs">
              AD
            </div>
            <div className="truncate">
              <p className="text-xs font-bold truncate">{user?.name || "Admin Lead"}</p>
              <p className={`text-[10px] truncate ${isLight ? "text-slate-500" : "text-gray-400"}`}>{user?.email || "admin@madprotek.com"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className={`w-full py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-2 cursor-pointer border ${
              isLight
                ? "bg-white hover:bg-red-50 hover:text-red-600 text-slate-600 border-slate-200"
                : "bg-neutral-900 hover:bg-red-500/20 hover:text-red-400 text-gray-400 border-neutral-700"
            }`}
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminThemeProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminThemeProvider>
  );
}
