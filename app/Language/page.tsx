"use client";

import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

const languages = [
  "हिन्दी", "தமிழ்", "मराठी", "বাংলা",
  "తెలుగు", "ಕನ್ನಡ", "ગુજરાતી", "മലയാളം",
  "ਪੰਜਾਬੀ", "ଓଡ଼ିଆ", "اردو", "English",
];

export default function LanguageSelection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-semibold text-on-surface text-center mt-6">
        Choose your language
      </h1>

      <div className="grid grid-cols-2 gap-3 mt-8 flex-1">
        {languages.map((lang) => {
          const isSelected = selected === lang;
          return (
            <button
              key={lang}
              onClick={() => setSelected(lang)}
              className={`rounded-md border-2 py-5 text-lg font-medium transition-colors
                ${isSelected
                  ? "border-primary bg-primary-container text-primary-on-container"
                  : "border-outline-variant bg-surface-container-low text-on-surface"
                }`}
            >
              {lang}
            </button>
          );
        })}
      </div>

      <div className="space-y-3 mt-6">
        {selected ? (
          <a href="/consent">
            <PrimaryButton>Continue</PrimaryButton>
          </a>
        ) : (
          <div className="opacity-40 pointer-events-none">
            <PrimaryButton>Continue</PrimaryButton>
          </div>
        )}
        <HelpLine />
      </div>
    </main>
  );
}