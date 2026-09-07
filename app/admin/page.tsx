"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Inbox, Users, ArrowUpRight, Plus, Database, Sparkles, CheckCircle2 } from "lucide-react";
import { useAdminTheme } from "@/context/AdminThemeContext";

export default function AdminDashboardPage() {
  const { theme } = useAdminTheme();
  const isLight = theme === "light";

  const [events, setEvents] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [evRes, ldRes, rgRes] = await Promise.all([
          fetch("/api/events"),
          fetch("/api/leads"),
          fetch("/api/registrations"),
        ]);

        const evData = await evRes.json();
        const ldData = await ldRes.json();
        const rgData = await rgRes.json();

        if (evData.success) setEvents(evData.data);
        if (ldData.success) setLeads(ldData.data);
        if (rgData.success) setRegistrations(rgData.data);
      } catch (err) {
        console.error("Dashboard fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openEventsCount = events.filter((e) => e.status === "REGISTRATION OPEN").length;

  const cardClass = `p-6 rounded-3xl border transition-all duration-300 ${
    isLight ? "bg-white border-slate-200 text-slate-900 shadow-sm" : "bg-neutral-900 border-neutral-800 text-white shadow-md"
  }`;

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 ${
        isLight ? "border-slate-200" : "border-neutral-800"
      }`}>
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-yellow-subtle/20 border border-brand-yellow/30 text-brand-yellow-dark text-xs font-bold mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>MYSQL ACTIVE DATABASE</span>
          </div>
          <h1 className={`text-3xl font-extrabold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Admin Control Dashboard
          </h1>
          <p className={`text-xs mt-1 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
            Overview of live events, lead inquiries, and participant registrations in {isLight ? "Bright" : "Dark"} Mode.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/admin/events"
            className="px-4 py-2.5 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-xs hover:bg-brand-yellow-bright transition-colors flex items-center space-x-1.5 shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Event</span>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Leads */}
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-extrabold uppercase ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              Total Lead Inquiries
            </span>
            <div className="p-2.5 rounded-xl bg-brand-yellow/15 text-brand-black">
              <Inbox className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-extrabold pt-1">{leads.length}</p>
          <p className="text-[11px] text-emerald-600 font-bold flex items-center space-x-1 pt-1">
            <CheckCircle2 className="h-3 w-3" />
            <span>{leads.filter((l) => l.status === "New").length} New Leads Pending</span>
          </p>
        </div>

        {/* Active Events */}
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-extrabold uppercase ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              Managed Events
            </span>
            <div className="p-2.5 rounded-xl bg-brand-yellow/15 text-brand-black">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-extrabold pt-1">{events.length}</p>
          <p className="text-[11px] text-brand-yellow-dark font-bold pt-1">
            {openEventsCount} Open for Registration
          </p>
        </div>

        {/* Registrations */}
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-extrabold uppercase ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              Event Registrations
            </span>
            <div className="p-2.5 rounded-xl bg-brand-yellow/15 text-brand-black">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-extrabold pt-1">{registrations.length}</p>
          <p className={`text-[11px] font-medium pt-1 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
            Verified Participants
          </p>
        </div>

        {/* Database Engine */}
        <div className={cardClass}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-extrabold uppercase ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              Database Engine
            </span>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600">
              <Database className="h-5 w-5" />
            </div>
          </div>
          <p className="text-lg font-extrabold pt-1">MySQL / Store Sync</p>
          <p className="text-[11px] text-emerald-600 font-bold flex items-center space-x-1 pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Connection Live</span>
          </p>
        </div>
      </div>

      {/* Two Column Layout: Recent Leads & Recent Registrations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Lead Inquiries */}
        <div className={cardClass}>
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-lg font-extrabold flex items-center space-x-2">
              <Inbox className="h-5 w-5 text-brand-yellow-dark" />
              <span>Recent Lead Submissions</span>
            </h3>
            <Link href="/admin/leads" className="text-xs text-brand-yellow-dark font-bold hover:underline flex items-center space-x-1">
              <span>View All</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className={`divide-y ${isLight ? "divide-slate-200" : "divide-neutral-800"}`}>
            {leads.slice(0, 4).map((lead) => (
              <div key={lead.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-extrabold">{lead.name}</p>
                  <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                    {lead.email} • {lead.service}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                    lead.status === "New"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : isLight
                      ? "bg-slate-100 text-slate-700"
                      : "bg-neutral-800 text-gray-300"
                  }`}
                >
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Event Registrations */}
        <div className={cardClass}>
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-lg font-extrabold flex items-center space-x-2">
              <Users className="h-5 w-5 text-brand-yellow-dark" />
              <span>Recent Participant Registrations</span>
            </h3>
            <Link href="/admin/registrations" className="text-xs text-brand-yellow-dark font-bold hover:underline flex items-center space-x-1">
              <span>View All</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className={`divide-y ${isLight ? "divide-slate-200" : "divide-neutral-800"}`}>
            {registrations.slice(0, 4).map((reg) => (
              <div key={reg.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-extrabold">{reg.name}</p>
                  <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                    {reg.eventTitle} • Bib #{reg.bibNumber}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-yellow-subtle text-brand-black border border-brand-yellow/40 text-[10px] font-black uppercase">
                  {reg.categorySelected}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
