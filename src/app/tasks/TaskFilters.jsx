"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TaskFilters = ({ search = "", category = "" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState(search);
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchText) {
        params.set("search", searchText);
      } else {
        params.delete("search");
      }

      if (selectedCategory) {
        params.set("category", selectedCategory);
      } else {
        params.delete("category");
      }

      params.set("page", "1");

      router.push(`/tasks?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText, selectedCategory, router, searchParams]);

  return (
    <div className="mb-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:grid-cols-2">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search tasks..."
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300 outline-none focus:border-cyan-500"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300 outline-none focus:border-cyan-500"
      >
        <option value="">All Categories</option>
        <option value="Design">Design</option>
        <option value="Writing">Writing</option>
        <option value="Development">Development</option>
        <option value="Marketing">Marketing</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default TaskFilters;
