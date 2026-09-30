"use client";
import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

export default function BaselineIntro() {
  return (
    <main className="min-h-screen flex flex-col p-5">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-6">
          <span className="text-4xl">🌱</span>
        </div>

        <h1 className="text-2xl font-semibold text-on-surface">
          Let's understand how you've been feeling
        </h1>
        <p className="text-base text-on-surface-variant mt-3">
          16 short questions, about 5 minutes.
          <br />
          There are no right or wrong answers, and you can skip any question.
        </p>

        <div className="mt-8 rounded-md bg-surface-container-low p-4 flex items-start gap-3 text-left">
          <span className="text-xl">🔒</span>
          <p className="text-sm text-on-surface-variant">
            Only you and your counsellor can see your answers.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <PrimaryButton onClick={() => (window.location.href = "/questions/1")}>
          Begin
        </PrimaryButton>
        <a
          href="/home"
          className="block w-full text-center text-sm text-on-surface-variant py-2"
        >
          Do this later
        </a>
        <HelpLine />
      </div>
    </main>
  );
}