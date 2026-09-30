"use client";

import { useState } from "react";
import HelpLine from "@/components/HelpLine";

const activities = [
  { emoji: "🌬️", title: "Breathing exercise", desc: "4-7-8 calming breath" },
  { emoji: "🖐️", title: "5-4-3-2-1 grounding", desc: "Notice what's around you" },
  { emoji: "📖", title: "A gentle story", desc: "A short, soothing read" },
  { emoji: "🎵", title: "Calming sounds", desc: "Rain, ocean, birdsong" },
];

export default function Toolkit() {
  const [breathing, setBreathing] = useState(false);

  if (breathing) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-5 bg-surface">
        <div className="w-40 h-40 rounded-full bg-primary-container flex items-center justify-center animate-pulse">
          <span className="text-lg font-semibold text-primary-on-container">
            Breathe in...
          </span>
        </div>
        <p className="text-base text-on-surface-variant mt-8 text-center">
          Follow the circle. In for 4, hold for 7, out for 8.
        </p>
        <button
          onClick={() => setBreathing(false)}
          className="mt-10 text-sm text-on-surface-variant underline"
        >
          Stop
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-semibold text-on-surface text-center mt-6">
        Coping toolkit
      </h1>
      <p className="text-base text-on-surface-variant text-center mt-2">
        Something small, whenever you need it.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-8">
        {activities.map((a) => (
          <button
            key={a.title}
            onClick={() => a.title === "Breathing exercise" && setBreathing(true)}
            className="rounded-md bg-surface-container-low p-4 text-left"
          >
            <span className="text-2xl">{a.emoji}</span>
            <p className="font-medium text-on-surface mt-2">{a.title}</p>
            <p className="text-xs text-on-surface-variant mt-1">{a.desc}</p>
          </button>
        ))}
      </div>

      <div className="flex-1" />
      <HelpLine />
    </main>
  );
}