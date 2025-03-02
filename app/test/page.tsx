"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const NeonBox = ({ letter, color }: { letter: string; color: string }) => {
  return (
    <motion.div
      className={`animate-flicker flex h-32 w-60 -rotate-2 cursor-pointer items-center justify-center rounded-md border-4 p-1 text-8xl font-bold hover:scale-105 xl:h-80 xl:w-80 xl:text-[12rem] border-[${color}] bg-black transition-all duration-300 ease-in-out`}
      style={{
        textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}, 0 0 80px ${color}`,
        filter: `drop-shadow(0 0 15px ${color})`,
        color: color,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      {letter}
    </motion.div>
  );
};

export default function NeonLogo() {
  return (
    <div className="flex justify-center space-x-6 bg-gray-900 p-16">
      <NeonBox letter="S" color="#00FFFF" />
      <NeonBox letter="T" color="#FF1493" />
      <NeonBox letter="B" color="#FF4500" />
      <NeonBox letter="H" color="#FFD700" />
    </div>
  );
}
