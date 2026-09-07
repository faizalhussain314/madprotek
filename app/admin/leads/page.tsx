"use client";

import React, { useState, useEffect } from "react";
import { Search, Inbox, Phone, Mail, MessageSquare, Trash2, CheckCircle2, Eye, X } from "lucide-react";
import { useAdminTheme } from "@/context/AdminThemeContext";

export default function AdminLeadsPage() {
  const { theme } = useAdminTheme();
  const isLight = theme === "light";

  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<any | null>(null);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        fetchLeads();
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead submission?")) return;

    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        if (selectedLead?.id === id) setSelectedLead(null);
        fetchLeads();
      }
    } catch (err) {
      alert("Error deleting lead");
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesFilter = activeFilter === "All" || l.status === activeFilter;
    const matchesQuery =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const statuses = ["All", "New", "Contacted", "In Progress", "Closed"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 ${
        isLight ? "border-slate-200" : "border-neutral-800"
      }`}>
        <div>
          <h1 className={`text-3xl font-extrabold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Lead Submissions
          </h1>
          <p className={`text-xs mt-1 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
            Manage consultation inquiries submitted via Hero Lead Popup and Contact page.
          </p>
        </div>

        <div className={`px-4 py-2 rounded-xl border text-xs font-bold ${
          isLight ? "bg-white border-slate-200 text-slate-800" : "bg-neutral-900 border-neutral-800 text-gray-300"
        }`}>
          Total Inquiries: <strong className="text-brand-yellow-dark">{leads.length}</strong>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Status Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto py-1">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setActiveFilter(st)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === st
                  ? "bg-brand-yellow text-brand-black font-extrabold shadow-sm"
                  : isLight
                  ? "bg-white text-slate-600 border border-slate-200 hover:text-slate-900"
                  : "bg-neutral-900 text-gray-400 border border-neutral-800 hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative md:w-64">
          <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 ${isLight ? "text-slate-400" : "text-gray-500"}`} />
          <input
            type="text"
            placeholder="Search leads by name or email..."
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

      {/* Leads Table */}
      <div className={`border rounded-3xl overflow-hidden shadow-md ${
        isLight ? "bg-white border-slate-200" : "bg-neutral-900 border-neutral-800"
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className={`font-extrabold uppercase text-[10px] tracking-wider border-b ${
              isLight ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-neutral-800/80 text-gray-400 border-neutral-800"
            }`}>
              <tr>
                <th className="py-4 px-6">Client Contact</th>
                <th className="py-4 px-6">Service Requested</th>
                <th className="py-4 px-6">Project Scope</th>
                <th className="py-4 px-6">Lead Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className={`divide-y ${isLight ? "divide-slate-200" : "divide-neutral-800"}`}>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-gray-500">
                    No lead submissions found matching criteria.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((item) => (
                  <tr key={item.id} className={`transition-colors ${isLight ? "hover:bg-slate-50" : "hover:bg-neutral-800/50"}`}>
                    {/* Contact */}
                    <td className="py-4 px-6">
                      <p className={`font-extrabold text-sm ${isLight ? "text-slate-900" : "text-white"}`}>{item.name}</p>
                      <div className={`flex items-center space-x-3 text-[11px] pt-0.5 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                        <span className="flex items-center space-x-1">
                          <Mail className="h-3 w-3 text-brand-yellow-dark" />
                          <span>{item.email}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Phone className="h-3 w-3 text-brand-yellow-dark" />
                          <span>{item.phone}</span>
                        </span>
                      </div>
                    </td>

                    {/* Service */}
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-lg border font-bold ${
                        isLight ? "bg-slate-100 border-slate-300 text-slate-800" : "bg-neutral-800 border-neutral-700 text-gray-200"
                      }`}>
                        {item.service}
                      </span>
                    </td>

                    {/* Message Preview */}
                    <td className="py-4 px-6 max-w-xs">
                      <p className={`line-clamp-2 leading-relaxed ${isLight ? "text-slate-600" : "text-gray-300"}`}>
                        {item.message || "No detailed scope specified."}
                      </p>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-6">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border focus:outline-none cursor-pointer ${
                          item.status === "New"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                            : item.status === "In Progress"
                            ? "bg-amber-100 text-amber-800 border-amber-300"
                            : item.status === "Contacted"
                            ? "bg-blue-100 text-blue-800 border-blue-300"
                            : isLight
                            ? "bg-slate-100 text-slate-700 border-slate-300"
                            : "bg-neutral-800 text-gray-400 border-neutral-700"
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right space-x-2">
                      <button
                        onClick={() => setSelectedLead(item)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight
                            ? "bg-slate-100 hover:bg-brand-yellow hover:text-brand-black border-slate-300 text-slate-700"
                            : "bg-neutral-800 hover:bg-brand-yellow hover:text-brand-black border-neutral-700 text-gray-300"
                        }`}
                        title="View Lead Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight
                            ? "bg-slate-100 hover:bg-red-500 hover:text-white border-slate-300 text-slate-700"
                            : "bg-neutral-800 hover:bg-red-500 hover:text-white border-neutral-700 text-gray-300"
                        }`}
                        title="Delete Lead"
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

      {/* LEAD DETAIL MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => setSelectedLead(null)} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

          <div className={`relative w-full max-w-xl border rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto space-y-6 ${
            isLight ? "bg-white border-slate-300 text-slate-900" : "bg-neutral-900 border-neutral-800 text-white"
          }`}>
            <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-slate-200" : "border-neutral-800"}`}>
              <div>
                <span className="text-[10px] font-black uppercase text-brand-yellow-dark tracking-widest block">
                  LEAD INQUIRY DETAIL
                </span>
                <h3 className="text-xl font-extrabold mt-0.5">{selectedLead.name}</h3>
              </div>
              <button onClick={() => setSelectedLead(null)} className={`p-2 rounded-full ${isLight ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-neutral-800 text-white hover:bg-neutral-700"}`}>
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className={`grid grid-cols-2 gap-4 p-4 rounded-2xl border ${isLight ? "bg-slate-50 border-slate-200" : "bg-neutral-800/60 border-neutral-800"}`}>
                <div>
                  <span className={`text-[10px] font-extrabold uppercase block ${isLight ? "text-slate-500" : "text-gray-400"}`}>Email Address</span>
                  <p className="font-extrabold mt-0.5">{selectedLead.email}</p>
                </div>
                <div>
                  <span className={`text-[10px] font-extrabold uppercase block ${isLight ? "text-slate-500" : "text-gray-400"}`}>Phone / WhatsApp</span>
                  <p className="font-extrabold mt-0.5">{selectedLead.phone}</p>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1 ${isLight ? "bg-slate-50 border-slate-200" : "bg-neutral-800/60 border-neutral-800"}`}>
                <span className={`text-[10px] font-extrabold uppercase block ${isLight ? "text-slate-500" : "text-gray-400"}`}>Service Requested</span>
                <p className="font-extrabold text-brand-yellow-dark text-sm">{selectedLead.service}</p>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1 ${isLight ? "bg-slate-50 border-slate-200" : "bg-neutral-800/60 border-neutral-800"}`}>
                <span className={`text-[10px] font-extrabold uppercase block ${isLight ? "text-slate-500" : "text-gray-400"}`}>Project Scope & Notes</span>
                <p className={`leading-relaxed font-normal ${isLight ? "text-slate-700" : "text-gray-200"}`}>{selectedLead.message || "No scope provided."}</p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className={`text-[11px] ${isLight ? "text-slate-500" : "text-gray-400"}`}>Submission ID: {selectedLead.id}</span>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="px-5 py-2 rounded-xl bg-brand-yellow text-brand-black font-extrabold shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
