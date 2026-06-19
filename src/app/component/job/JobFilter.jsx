"use client";

export default function JobFilter({ setFilter }) {
    return (
        <div>

            <select
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 rounded-xl bg-zinc-700 text-white outline-none"
            >
                <option value="all">All Categories</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Sales">Sales</option>
            </select>

            
        </div>


    );
}