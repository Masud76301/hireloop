"use client";

export default function JobSearch({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      onChange={(e) => setSearch(e.target.value)}
      className="px-4 py-2 rounded-xl bg-zinc-700 text-white outline-none w-full"
    />
  );
}