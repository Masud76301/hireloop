"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { authClient, signOut, useSession } from "../lib/auth-client";
import { Button } from "@heroui/react";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, error } = useSession();
  const user = session?.user;
 
  const handleSignOut=async ()=>{
    await signOut()
  }
  return (
    <nav className="w-full bg-linear-to-r from-[#1a1a1a] to-[#0f0f0f] py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="HireLopp Logo"
            width={10}
            height={10}
            className="w-10 h-10"
          />
          <span className="text-white text-2xl font-semibold">HireLoop</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-[#1c1c1c] text-white px-8 py-3 rounded-2xl shadow-lg gap-8">
          <Link href="/browse-jobs" className="hover:text-gray-300 transition">
            Browse Jobs
          </Link>

          <Link href="/company" className="hover:text-gray-300 transition">
            Company
          </Link>

          <Link href="/pricing" className="hover:text-gray-300 transition">
            Pricing
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-600"></div>

          {/* Sign In */}
         { user? <>
          <div className="flex gap-4 items-center">
            <Link  href="/dashbord"><h1>Hi {user.name}</h1></Link>
            <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
          </div>

         </>:
          (<Link href="/signin" className="text-blue-400 hover:text-blue-500 transition">
            Sign In
          </Link>)}

          {/* Get Started Button */}
          <Link
            href="/get-started"
            className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 bg-[#1c1c1c] text-white py-4 px-6 space-y-3 rounded-xl mx-4">
          <div className="space-y-3">

            <div className="flex gap-3 justify-center items-center flex-wrap">

              <Link href="/browse-jobs">Browse Jobs</Link>

              <Link href="/company">Company</Link>

              <Link href="/pricing">Pricing</Link>

              <Link href="/signin" className="text-blue-400">
                Sign In
              </Link>
            </div>

          </div>

          <Link
            href="/get-started"
            className="block bg-white text-black text-center rounded-lg py-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}