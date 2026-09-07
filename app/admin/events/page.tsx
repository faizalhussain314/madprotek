"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Search, Edit2, Trash2, Calendar, MapPin, CheckCircle2, X, AlertCircle, Globe, ExternalLink, AlertTriangle } from "lucide-react";
import { useAdminTheme } from "@/context/AdminThemeContext";
import { ButtonSpinner } from "@/components/ui/LoadingKit";

export default function AdminEventsPage() {
  const { theme } = useAdminTheme();
  const isLight = theme === "light";

  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any | null>(null);
  const [eventToDelete, setEventToDelete] = useState<any | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "Marathons",
    date: "",
    location: "",
    venue: "",
    address: "",
    image: "/images/events/marathon/hero.png",
    status: "REGISTRATION OPEN",
    shortDescription: "",
    description: "",
    externalUrl: "",
  });

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/events?t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setEvents(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch admin events", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleOpenAdd = () => {
    setFormData({
      title: "",
      category: "Marathons",
      date: "November 20, 2026",
      location: "Hosur, Tamil Nadu",
      venue: "Hosur Sports Complex",
      address: "Inner Ring Road, Hosur 635109",
      image: "/images/events/marathon/hero.png",
      status: "REGISTRATION OPEN",
      shortDescription: "Official sports marathon & community event managed by MadProTek.",
      description: "Comprehensive event details, participant registration, timing bibs, and schedule.",
      externalUrl: "",
    });
    setEditingEvent(null);
    setIsAddModalOpen(true);
  };

  const handleOpenEdit = (eventItem: any) => {
    setEditingEvent(eventItem);
    setFormData({
      title: eventItem.title || "",
      category: eventItem.category || "Marathons",
      date: eventItem.date || "",
      location: eventItem.location || "",
      venue: eventItem.venue || "",
      address: eventItem.address || "",
      image: eventItem.image || "/images/events/marathon/hero.png",
      status: eventItem.status || "REGISTRATION OPEN",
      shortDescription: eventItem.shortDescription || "",
      description: eventItem.description || "",
      externalUrl: eventItem.externalUrl || "",
    });
    setIsAddModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/events";
      const method = editingEvent ? "PUT" : "POST";
      const payload = editingEvent ? { slug: editingEvent.slug || editingEvent.id, ...formData } : formData;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsAddModalOpen(false);
        fetchEvents();
      } else {
        alert(data.message || "Failed to save event");
      }
    } catch (err: any) {
      alert("Error saving event: " + err.message);
    }
  };

  const triggerDeleteModal = (eventItem: any) => {
    setEventToDelete(eventItem);
  };

  const confirmDelete = async () => {
    if (!eventToDelete) return;
    const target = eventToDelete.slug || eventToDelete.id;
    if (!target) return;

    setIsDeleting(true);

    try {
      const res = await fetch(`/api/events?slug=${encodeURIComponent(target)}`, {
        method: "DELETE",
        headers: { "Cache-Control": "no-cache" },
      });
      const data = await res.json();
      if (data.success) {
        // Optimistic UI update and refetch
        setEvents((prev) => prev.filter((e) => e.slug !== target && e.id !== target));
        setEventToDelete(null);
        fetchEvents();
      } else {
        alert(data.message || "Failed to delete event");
        fetchEvents();
      }
    } catch (err: any) {
      alert("Error deleting event: " + err.message);
      fetchEvents();
    } finally {
      setIsDeleting(false);
    }
  };

  const handleStatusToggle = async (eventItem: any, newStatus: string) => {
    try {
      const res = await fetch("/api/events", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: eventItem.slug || eventItem.id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        fetchEvents();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredEvents = events.filter(
    (e) =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 ${
        isLight ? "border-slate-200" : "border-neutral-800"
      }`}>
        <div>
          <h1 className={`text-3xl font-extrabold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Event Management
          </h1>
          <p className={`text-xs mt-1 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
            Create, edit, toggle registration status, delete, and configure separate domain links for events.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-5 py-3 rounded-2xl bg-brand-yellow text-brand-black font-extrabold text-xs sm:text-sm hover:bg-brand-yellow-bright transition-colors flex items-center space-x-2 shadow-md cursor-pointer active:scale-95"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Event</span>
        </button>
      </div>

      {/* Search & Filter */}
      <div className="relative max-w-md">
        <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 ${isLight ? "text-slate-400" : "text-gray-500"}`} />
        <input
          type="text"
          placeholder="Search events by title, category or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
            isLight
              ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-brand-yellow"
              : "bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-brand-yellow"
          }`}
        />
      </div>

      {/* Events Table */}
      <div className={`border rounded-3xl overflow-hidden shadow-md ${
        isLight ? "bg-white border-slate-200" : "bg-neutral-900 border-neutral-800"
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className={`font-extrabold uppercase text-[10px] tracking-wider border-b ${
              isLight ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-neutral-800/80 text-gray-400 border-neutral-800"
            }`}>
              <tr>
                <th className="py-4 px-6">Event</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Date & Location</th>
                <th className="py-4 px-6">Registration Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className={`divide-y ${isLight ? "divide-slate-200" : "divide-neutral-800"}`}>
              {loading ? (
                /* Skeleton Loader for Table */
                Array.from({ length: 4 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-neutral-800 shrink-0" />
                        <div className="space-y-2 flex-1">
                          <div className="h-4 w-48 rounded bg-slate-200 dark:bg-neutral-800" />
                          <div className="h-3 w-32 rounded bg-slate-200 dark:bg-neutral-800" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-6 w-20 rounded-lg bg-slate-200 dark:bg-neutral-800" />
                    </td>
                    <td className="py-4 px-6 space-y-2">
                      <div className="h-3 w-28 rounded bg-slate-200 dark:bg-neutral-800" />
                      <div className="h-3 w-20 rounded bg-slate-200 dark:bg-neutral-800" />
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-7 w-28 rounded-xl bg-slate-200 dark:bg-neutral-800" />
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="h-8 w-16 rounded-xl bg-slate-200 dark:bg-neutral-800 inline-block" />
                    </td>
                  </tr>
                ))
              ) : filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-gray-500">
                    No events found. Click "Add New Event" to create one.
                  </td>
                </tr>
              ) : (
                filteredEvents.map((item) => (
                  <tr key={item.id || item.slug} className={`transition-colors ${isLight ? "hover:bg-slate-50" : "hover:bg-neutral-800/50"}`}>
                    {/* Event Title & Thumbnail */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-neutral-800 relative overflow-hidden shrink-0 border border-black/10 dark:border-white/10">
                          <Image src={item.image || "/images/events/marathon/hero.png"} alt={item.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className={`font-extrabold text-sm ${isLight ? "text-slate-900" : "text-white"}`}>{item.title}</p>
                          <p className={`text-[11px] truncate max-w-xs ${isLight ? "text-slate-500" : "text-gray-400"}`}>{item.shortDescription}</p>
                          
                          {/* Separate Domain / Subdomain Badge */}
                          {item.externalUrl && (
                            <a
                              href={item.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 mt-1 px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-brand-yellow font-mono text-[10px] font-bold hover:underline"
                            >
                              <Globe className="h-2.5 w-2.5 shrink-0" />
                              <span className="truncate max-w-[180px]">{item.externalUrl.replace(/^https?:\/\//, '')}</span>
                              <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                            </a>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6 font-bold">
                      <span className={`px-2.5 py-1 rounded-lg border text-[11px] ${
                        isLight ? "bg-slate-100 border-slate-300 text-slate-700" : "bg-neutral-800 border-neutral-700 text-gray-300"
                      }`}>
                        {item.category}
                      </span>
                    </td>

                    {/* Date & Location */}
                    <td className="py-4 px-6 space-y-0.5">
                      <p className="font-extrabold text-brand-yellow-dark flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </p>
                      <p className={`text-[11px] flex items-center space-x-1 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </p>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-6">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusToggle(item, e.target.value)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-extrabold focus:outline-none cursor-pointer ${
                          isLight
                            ? "bg-slate-50 border-slate-300 text-slate-900"
                            : "bg-neutral-800 border-neutral-700 text-white"
                        }`}
                      >
                        <option value="REGISTRATION OPEN">REGISTRATION OPEN</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="SOLD OUT">SOLD OUT</option>
                        <option value="COMPLETED">COMPLETED</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right space-x-2">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight
                            ? "bg-slate-100 hover:bg-brand-yellow hover:text-brand-black border-slate-300 text-slate-700"
                            : "bg-neutral-800 hover:bg-brand-yellow hover:text-brand-black border-neutral-700 text-gray-300"
                        }`}
                        title="Edit Event"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => triggerDeleteModal(item)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight
                            ? "bg-slate-100 hover:bg-red-500 hover:text-white border-slate-300 text-slate-700"
                            : "bg-neutral-800 hover:bg-red-500 hover:text-white border-neutral-700 text-gray-300"
                        }`}
                        title="Delete Event"
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

      {/* CREATE / EDIT EVENT MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl p-6 sm:p-8 my-8 ${
            isLight ? "bg-white border-slate-200 text-slate-900" : "bg-neutral-900 border-neutral-800 text-white"
          }`}>
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h2 className="text-xl font-extrabold tracking-tight">
                {editingEvent ? "Edit Event Details" : "Create New Event"}
              </h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className={`p-2 rounded-xl border ${isLight ? "border-slate-200 text-slate-500" : "border-neutral-700 text-gray-400"}`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Title */}
                <div className="space-y-1">
                  <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Event Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hosur Half Marathon 2026"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                    }`}
                  />
                </div>

                {/* Category */}
                <div className="space-y-1">
                  <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                    }`}
                  >
                    <option value="Marathons">Marathons</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Off-Road">Off-Road</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Community">Community</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1">
                  <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Event Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="October 18, 2026"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                    }`}
                  />
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Hosur, Tamil Nadu"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Venue */}
                <div className="space-y-1">
                  <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Venue Name</label>
                  <input
                    type="text"
                    placeholder="Hosur Stadium Grounds"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                    }`}
                  />
                </div>

                {/* Status */}
                <div className="space-y-1">
                  <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                    }`}
                  >
                    <option value="REGISTRATION OPEN">REGISTRATION OPEN</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="SOLD OUT">SOLD OUT</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail Image Path */}
              <div className="space-y-1">
                <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>
                  Thumbnail Image URL / Asset Path
                </label>
                <input
                  type="text"
                  placeholder="/images/events/marathon/hero.png"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none ${
                    isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                  }`}
                />
              </div>

              {/* SEPARATE SUBDOMAIN OR EXTERNAL PAGE LINK (Optional) */}
              <div className={`p-4 rounded-2xl border space-y-2 ${
                isLight ? "bg-amber-50/50 border-amber-200" : "bg-neutral-800/60 border-neutral-700"
              }`}>
                <div className="flex items-center justify-between">
                  <label className="font-extrabold uppercase flex items-center space-x-1.5 text-brand-yellow-dark">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Separate Subdomain / Domain Page (Optional)</span>
                  </label>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-yellow/20 text-brand-black dark:text-brand-yellow">
                    Opens in New Tab
                  </span>
                </div>
                <input
                  type="url"
                  placeholder="https://marathon.madprotekcorp.com or https://tickets.example.com"
                  value={formData.externalUrl}
                  onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none text-xs ${
                    isLight ? "bg-white border-slate-300 text-slate-900" : "bg-neutral-900 border-neutral-700 text-white"
                  }`}
                />
                <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                  If provided, end users clicking this event card will open this external link in a new tab instead of the default page.
                </p>
              </div>

              {/* Short Description */}
              <div className="space-y-1">
                <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Short Overview (Card Description)</label>
                <textarea
                  rows={2}
                  placeholder="Summary for event listing cards..."
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none resize-none ${
                    isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                  }`}
                />
              </div>

              {/* Full Description */}
              <div className="space-y-1">
                <label className={`font-bold uppercase block ${isLight ? "text-slate-600" : "text-gray-400"}`}>Detailed Description</label>
                <textarea
                  rows={3}
                  placeholder="Full event highlights, route details, and logistics info..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border focus:outline-none resize-none ${
                    isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-neutral-800 border-neutral-700 text-white"
                  }`}
                />
              </div>

              {/* Submit Buttons */}
              <div className={`pt-4 flex items-center justify-end space-x-3 border-t ${isLight ? "border-slate-200" : "border-neutral-800"}`}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className={`px-5 py-2.5 rounded-xl border font-bold cursor-pointer ${
                    isLight ? "border-slate-300 text-slate-700 hover:bg-slate-100" : "border-neutral-700 text-gray-300 hover:text-white"
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-yellow text-brand-black font-extrabold hover:bg-brand-yellow-bright shadow-md cursor-pointer active:scale-95"
                >
                  {editingEvent ? "Save Changes" : "Create Event"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* CONFIRM DELETE MODAL POPUP */}
      {eventToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className={`relative w-full max-w-md rounded-3xl border p-6 sm:p-7 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200 ${
              isLight ? "bg-white border-slate-200 text-slate-900" : "bg-neutral-900 border-neutral-800 text-white"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 flex items-center justify-center shrink-0 shadow-inner">
                <Trash2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold tracking-tight">Confirm Deletion</h3>
                <p className={`text-xs leading-relaxed ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                  Are you sure you want to permanently delete this event? This action will remove it from the live website immediately.
                </p>
              </div>
            </div>

            {/* Target event card summary */}
            <div className={`p-4 rounded-2xl border flex items-center space-x-3 ${
              isLight ? "bg-slate-50 border-slate-200" : "bg-neutral-800/60 border-neutral-700"
            }`}>
              <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-neutral-800 relative overflow-hidden shrink-0 border border-black/10 dark:border-white/10">
                <Image src={eventToDelete.image || "/images/events/marathon/hero.png"} alt={eventToDelete.title} fill className="object-cover" />
              </div>
              <div className="truncate flex-1">
                <p className="font-extrabold text-xs truncate">{eventToDelete.title}</p>
                <p className="text-[11px] text-brand-yellow-dark font-bold truncate">
                  {eventToDelete.category} • {eventToDelete.date}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex items-center justify-end space-x-3 pt-3 border-t ${
              isLight ? "border-slate-100" : "border-neutral-800"
            }`}>
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setEventToDelete(null)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold cursor-pointer disabled:opacity-50 transition-colors ${
                  isLight ? "border-slate-300 text-slate-700 hover:bg-slate-100" : "border-neutral-700 text-gray-300 hover:text-white"
                }`}
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={confirmDelete}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs flex items-center space-x-2 shadow-md cursor-pointer active:scale-95 disabled:opacity-50 transition-all"
              >
                {isDeleting ? (
                  <>
                    <ButtonSpinner size="sm" color="border-white" />
                    <span>Deleting Event...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Confirm Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
