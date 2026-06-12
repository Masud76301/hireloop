"use client";

import { FaBriefcase, FaBuilding, FaUsers } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { motion } from "motion/react"


export default function HeroBanner() {
  return (
    <section
      className="relative w-full h-150 flex flex-col items-center justify-center text-white overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className=" absolute inset-0  bg-cover bg-center"
        style={{ backgroundImage: "url('/globe.png')" }}
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-medium leading-snug">
          Assisting over{" "}
          <span className="font-semibold text-purple-400">
            15,000 job seekers
          </span>{" "}
          find their dream positions.
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl px-4">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4 w-full max-w-6xl">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <FaBriefcase className="text-2xl mb-3 opacity-80" />
            <h3 className="text-3xl font-bold">50K</h3>
            <p className="text-sm opacity-70">Active Jobs</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <FaBuilding className="text-2xl mb-3 opacity-80" />
            <h3 className="text-3xl font-bold">12K</h3>
            <p className="text-sm opacity-70">Companies</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <FaUsers className="text-2xl mb-3 opacity-80" />
            <h3 className="text-3xl font-bold">2M</h3>
            <p className="text-sm opacity-70">Job Seekers</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <AiFillStar className="text-2xl mb-3 opacity-80" />
            <h3 className="text-3xl font-bold">97%</h3>
            <p className="text-sm opacity-70">Satisfaction Rate</p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}