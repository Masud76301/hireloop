"use client";

export default function JobSort({ setSort }) {
  return (
    <select
      onChange={(e) => setSort(e.target.value)}
      className="px-4 py-2 rounded-xl bg-zinc-700 text-white outline-none"
    >
      <option value="">Sort By</option>
      <option value="salary_high">Salary (High → Low)</option>
      <option value="salary_low">Salary (Low → High)</option>
    </select>
  );
}