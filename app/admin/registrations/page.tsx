"use client";

import React, { useState, useEffect } from "react";
import { Search, Users, Trash2, CheckCircle2, Ticket, Mail, Phone, Filter } from "lucide-react";
import { useAdminTheme } from "@/context/AdminThemeContext";

export default function AdminRegistrationsPage() {
  const { theme } = useAdminTheme();
  const isLight = theme === "light";

  const [registrations, setRegistrations] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEventId, setSelectedEventId] = useState("All");

  const fetchData = async () => {
    try {
      const [regRes, evRes] = await Promise.all([
        fetch("/api/registrations"),
        fetch("/api/events"),
      ]);
      const regData = await regRes.json();
      const evData = await evRes.json();

      if (regData.success) setRegistrations(regData.data);
      if (evData.success) setEvents(evData.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/registrations", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete participant registration?")) return;

    try {
      const res = await fetch(`/api/registrations?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        fetchData();
      }
    } catch (err) {
      alert("Error deleting registration");
    }
  };

  const filteredRegistrations = registrations.filter((r) => {
    const matchesEvent = selectedEventId === "All" || r.eventId === selectedEventId;
    const matchesQuery =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.bibNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.eventTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesEvent && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 ${
        isLight ? "border-slate-200" : "border-neutral-800"
      }`}>
        <div>
          <h1 className={`text-3xl font-extrabold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Event Registrations
          </h1>
          <p className={`text-xs mt-1 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
            Manage participant entries, electronic bib numbers, and registration status.
          </p>
        </div>

        <div className={`px-4 py-2 rounded-xl border text-xs font-bold ${
          isLight ? "bg-white border-slate-200 text-slate-800" : "bg-neutral-900 border-neutral-800 text-gray-300"
        }`}>
          Total Participants: <strong className="text-brand-yellow-dark">{registrations.length}</strong>
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Event Filter Dropdown */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-brand-yellow-dark shrink-0" />
          <select
            value={selectedEventId}
            onChange={(e) => setSelectedEventId(e.target.value)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-bold focus:outline-none cursor-pointer ${
              isLight
                ? "bg-white border-slate-300 text-slate-900"
                : "bg-neutral-900 border-neutral-800 text-white"
            }`}
          >
            <option value="All">All Managed Events ({events.length})</option>
            {events.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.title}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="relative md:w-64">
          <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 ${isLight ? "text-slate-400" : "text-gray-500"}`} />
          <input
            type="text"
            placeholder="Search participant name or Bib #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 rounded-xl border text-xs focus:outline-none transition-colors ${
              isLight
                ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-brand-yellow"
                : "bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-brand-yellow"
            }`}
          />
        </div>
      </div>

      {/* Registrations Table */}
      <div className={`border rounded-3xl overflow-hidden shadow-md ${
        isLight ? "bg-white border-slate-200" : "bg-neutral-900 border-neutral-800"
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className={`font-extrabold uppercase text-[10px] tracking-wider border-b ${
              isLight ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-neutral-800/80 text-gray-400 border-neutral-800"
            }`}>
              <tr>
                <th className="py-4 px-6">Participant</th>
                <th className="py-4 px-6">Event & Category</th>
                <th className="py-4 px-6">Timing Bib #</th>
                <th className="py-4 px-6">Shirt Size</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className={`divide-y ${isLight ? "divide-slate-200" : "divide-neutral-800"}`}>
              {filteredRegistrations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-500">
                    No participant registrations found.
                  </td>
                </tr>
              ) : (
                filteredRegistrations.map((item) => (
                  <tr key={item.id} className={`transition-colors ${isLight ? "hover:bg-slate-50" : "hover:bg-neutral-800/50"}`}>
                    {/* Participant Contact */}
                    <td className="py-4 px-6">
                      <p className={`font-extrabold text-sm ${isLight ? "text-slate-900" : "text-white"}`}>{item.name}</p>
                      <div className={`flex items-center space-x-3 text-[11px] pt-0.5 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                        <span>{item.email}</span>
                        <span>•</span>
                        <span>{item.phone}</span>
                      </div>
                    </td>

                    {/* Event & Category */}
                    <td className="py-4 px-6 space-y-0.5">
                      <p className={`font-extrabold ${isLight ? "text-slate-900" : "text-white"}`}>{item.eventTitle}</p>
                      <span className="inline-block px-2.5 py-0.5 rounded bg-brand-yellow-subtle text-brand-black border border-brand-yellow/30 text-[10px] font-black uppercase">
                        {item.categorySelected}
                      </span>
                    </td>

                    {/* Bib Number */}
                    <td className="py-4 px-6 font-mono font-extrabold text-brand-yellow-dark text-sm">
                      <span className="flex items-center space-x-1">
                        <Ticket className="h-3.5 w-3.5 text-brand-yellow-dark" />
                        <span>{item.bibNumber}</span>
                      </span>
                    </td>

                    {/* T-Shirt Size */}
                    <td className="py-4 px-6 font-bold">
                      <span className={`px-2.5 py-1 rounded border text-xs font-mono ${
                        isLight ? "bg-slate-100 border-slate-300 text-slate-800" : "bg-neutral-800 border-neutral-700 text-gray-300"
                      }`}>
                        {item.tshirtSize || "M"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`px-3 py-1 rounded-xl text-xs font-extrabold border focus:outline-none cursor-pointer ${
                          item.status === "Confirmed"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                            : item.status === "Pending"
                            ? "bg-amber-100 text-amber-800 border-amber-300"
                            : "bg-red-100 text-red-800 border-red-300"
                        }`}
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight
                            ? "bg-slate-100 hover:bg-red-500 hover:text-white border-slate-300 text-slate-700"
                            : "bg-neutral-800 hover:bg-red-500 hover:text-white border-neutral-700 text-gray-300"
                        }`}
                        title="Delete Registration"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
