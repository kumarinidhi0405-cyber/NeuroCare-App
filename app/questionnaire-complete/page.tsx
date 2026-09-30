import PrimaryButton from "@/components/PrimaryButton";

export default function QuestionnaireComplete() {
  return (
    <main className="min-h-screen flex flex-col p-5">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-6">
          <span className="text-4xl">🌿</span>
        </div>
        <h1 className="text-2xl font-semibold text-on-surface">
          Thank you for sharing
        </h1>
        <p className="text-base text-on-surface-variant mt-3">
          This helps us support you better.
          <br />
          We'll be with you every step of the way.
        </p>
        <div className="mt-8 rounded-md bg-surface-container-low p-4 text-sm text-on-surface-variant">
          Your answers are private. Only you and your counsellor can see them.
        </div>
      </div>

      <a href="/home">
        <PrimaryButton>Continue to Home</PrimaryButton>
      </a>
      <p className="text-center text-sm text-on-surface-variant mt-3">
        Private and secure
      </p>
    </main>
  );
}