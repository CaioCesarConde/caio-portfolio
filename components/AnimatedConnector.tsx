"use client";

import { motion } from "framer-motion";

export default function AnimatedConnector() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 50 100 C 200 0, 400 200, 550 100"
        stroke="url(#gradient)"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF00FF" />
          <stop offset="100%" stopColor="#00FFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}