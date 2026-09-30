"use client";

import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

export default function CaseId() {
  const [caseId, setCaseId] = useState("");

  return (
    <main className="min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-semibold text-on-surface text-center mt-10">
        Verify your Case ID
      </h1>
      <p className="text-base text-on-surface-variant text-center mt-2">
        This connects you to your existing case, so your counsellor already knows you.
      </p>

      <div className="mt-10">
        <label className="text-sm font-medium text-on-surface-variant">
          Case ID
        </label>
        <input
          type="text"
          value={caseId}
          onChange={(e) => setCaseId(e.target.value)}
          placeholder="e.g. MSJE-2026-00123"
          className="w-full mt-2 rounded-md border-2 border-outline-variant
                     bg-surface-container-low px-4 py-4 text-lg text-on-surface
                     focus:border-primary outline-none"
        />
        <p className="text-sm text-on-surface-variant mt-3">
          Don't have one? Your counsellor or protection officer can give you this.
        </p>
      </div>

      <div className="flex-1" />

      <div className="space-y-3 mt-6">
        <PrimaryButton
          disabled={caseId.trim().length === 0}
          className={caseId.trim().length === 0 ? "opacity-40" : ""}
          onClick={() => (window.location.href = "/baseline-intro")}
        >
          Verify and Continue
        </PrimaryButton>
        <HelpLine />
      </div>
    </main>
  );
}