"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

const moods = [
  { emoji: "😔", label: "Struggling" },
  { emoji: "🙁", label: "Low" },
  { emoji: "😐", label: "Okay" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😄", label: "Great" },
];

export default function CheckIn() {
  const router = useRouter();
  const [mood, setMood] = useState<number | null>(null);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    // TODO: send { mood, note, timestamp } to the backend risk-scoring API
    router.push("/home");
  };

  return (
    <main className="min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-semibold text-on-surface text-center mt-6">
        How are you feeling right now?
      </h1>

      <div className="flex justify-between mt-10">
        {moods.map((m, i) => (
          <button
            key={m.label}
            onClick={() => setMood(i)}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl transition-colors
                ${mood === i ? "bg-primary-container" : "bg-surface-container-low"}`}
            >
              {m.emoji}
            </div>
            <span
              className={`text-xs ${mood === i ? "text-primary font-semibold" : "text-on-surface-variant"}`}
            >
              {m.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10">
        <label className="text-sm font-medium text-on-surface-variant">
          Want to add anything? (optional)
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type or use the mic..."
          rows={4}
          className="w-full mt-2 rounded-md border-2 border-outline-variant
                     bg-surface-container-low px-4 py-3 text-base text-on-surface
                     focus:border-primary outline-none resize-none"
        />
      </div>

      <div className="flex-1" />

      <div className="space-y-3">
        <PrimaryButton
          disabled={mood === null}
          className={mood === null ? "opacity-40" : ""}
          onClick={handleSubmit}
        >
          Done
        </PrimaryButton>
        <HelpLine />
      </div>
    </main>
  );
}