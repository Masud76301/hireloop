"use client";

import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuZap } from "react-icons/lu";
import { MdOutlineCheckCircle } from "react-icons/md";

const stats = [
  {
    title: "Total Job Posts",
    value: "48",
    icon: FaRegFileAlt,
  },
  {
    title: "Total Applicants",
    value: "1,284",
    icon: HiOutlineUsers,
  },
  {
    title: "Active Jobs",
    value: "18",
    icon: LuZap,
  },
  {
    title: "Jobs Closed",
    value: "32",
    icon: MdOutlineCheckCircle,
  },
];

export default function RecruiterStats() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 w-full">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-linear-to-br
              from-zinc-900
              via-zinc-950
              to-black
              p-7
              min-h-47
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
            "
          >
            {/* Gradient Glow */}
            <div className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_55%)]
                "
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="
                  mb-8
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                "
              >
                <Icon className="text-xl text-zinc-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-base text-zinc-400">
                  {item.title}
                </p>

                <h2 className="text-4xl font-semibold text-white tracking-tight">
                  {item.value}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}