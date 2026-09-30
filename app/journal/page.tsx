"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

export default function Journal() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-semibold text-on-surface text-center mt-6">
        Your journal
      </h1>
      <p className="text-base text-on-surface-variant text-center mt-2">
        Speak or write freely. This is just for you.
      </p>

      {/* Mic / recording area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl transition-colors
            ${isRecording ? "bg-error text-error-on" : "bg-primary-container text-primary-on-container"}`}
        >
          🎙️
        </button>
        <p className="text-sm text-on-surface-variant mt-4">
          {isRecording ? "Listening... tap to stop" : "Tap to start speaking"}
        </p>
      </div>

      {/* Or type instead */}
      <div className="mt-4">
        <label className="text-sm font-medium text-on-surface-variant">
          Or write instead
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Today I felt..."
          rows={4}
          className="w-full mt-2 rounded-md border-2 border-outline-variant
                     bg-surface-container-low px-4 py-3 text-base text-on-surface
                     focus:border-primary outline-none resize-none"
        />
      </div>

      <div className="space-y-3 mt-6">
        <PrimaryButton
          disabled={!text.trim() && !isRecording}
          className={!text.trim() && !isRecording ? "opacity-40" : ""}
          onClick={() => {
            // TODO: send { text, audioBlob, timestamp } to the NLP sentiment API
            router.push("/home");
          }}
        >
          Save entry
        </PrimaryButton>
        <HelpLine />
      </div>
    </main>
  );
}