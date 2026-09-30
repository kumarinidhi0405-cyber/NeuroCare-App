"use client";

import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

const toggles = [
  { id: "mood", label: "Daily mood check-ins", desc: "A quick 2-minute check-in each day." },
  { id: "journal", label: "Journal & voice diary", desc: "So patterns in your words can help your care." },
  { id: "passive", label: "Sleep & app usage signals", desc: "Optional. Helps spot distress early." },
];

export default function Consent() {
  const [agreed, setAgreed] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setAgreed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <main className="min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-semibold text-on-surface text-center mt-6">
        Your privacy, your choice
      </h1>
      <p className="text-base text-on-surface-variant text-center mt-2">
        Choose what you're comfortable sharing. You can change this anytime.
      </p>

      <div className="flex-1 mt-8 space-y-3">
        {toggles.map((t) => (
          <div
            key={t.id}
            className="rounded-md bg-surface-container-low p-4 flex items-center justify-between"
          >
            <div className="pr-3">
              <p className="font-semibold text-on-surface">{t.label}</p>
              <p className="text-sm text-on-surface-variant mt-1">{t.desc}</p>
            </div>
            <button
              onClick={() => toggle(t.id)}
              className={`w-12 h-7 rounded-full flex items-center px-1 shrink-0 transition-colors
                ${agreed[t.id] ? "bg-primary justify-end" : "bg-outline-variant justify-start"}`}
            >
              <div className="w-5 h-5 rounded-full bg-white" />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-3 mt-6">
        <PrimaryButton onClick={() => (window.location.href = "/case-id")}>
          Agree and Continue
        </PrimaryButton>
        <HelpLine />
      </div>
    </main>
  );
}