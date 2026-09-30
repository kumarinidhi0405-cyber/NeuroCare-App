"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself, or that you are a failure",
  "Trouble concentrating on things",
  "Moving or speaking slowly, or being fidgety and restless",
  "Thoughts that you would be better off not being here",
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid something awful might happen",
];

const options = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];

export default function Question() {
  const params = useParams();
  const router = useRouter();
  const index = parseInt(params.id as string, 10);
  const [selected, setSelected] = useState<number | null>(null);

  const question = questions[index - 1];
  const total = questions.length;

  const handleSelect = (optIndex: number) => {
    setSelected(optIndex);

    // Question 9 is the PHQ-9 self-harm question — route to support instead
    if (index === 9 && optIndex > 0) {
      router.push("/support-check");
      return;
    }

    setTimeout(() => {
      if (index < total) {
        router.push(`/questions/${index + 1}`);
      } else {
        router.push("/questionnaire-complete");
      }
    }, 300);
  };

  return (
    <main className="min-h-screen flex flex-col p-5">
      <div className="mt-4">
        <p className="text-sm font-medium text-on-surface-variant">
          Question {index} of {total}
        </p>
        <div className="w-full h-1.5 bg-surface-container-low rounded-full mt-2">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xl font-semibold text-on-surface">
          Over the last 2 weeks, how often have you been bothered by:
        </p>
        <p className="text-xl font-semibold text-primary mt-2">{question}</p>
      </div>

      <div className="flex-1 mt-8 space-y-3">
        {options.map((opt, i) => (
          <button
            key={opt}
            onClick={() => handleSelect(i)}
            className={`w-full text-left rounded-md border-2 px-4 py-4 text-lg transition-colors
              ${selected === i
                ? "border-primary bg-primary-container text-primary-on-container"
                : "border-outline-variant bg-surface-container-low text-on-surface"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <a
          href={index < total ? `/questions/${index + 1}` : "/questionnaire-complete"}
          className="block w-full text-center text-sm text-on-surface-variant py-2"
        >
          Skip
        </a>
        <HelpLine />
      </div>
    </main>
  );
}