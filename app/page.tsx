import PrimaryButton from "@/components/PrimaryButton";
import HelpLine from "@/components/HelpLine";

export default function Welcome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-5">
      <div />
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-on-surface">NeuroCare</h1>
        <p className="text-base text-on-surface-variant mt-2">
          A safe space to heal, at your own pace.
        </p>
      </div>
      <div className="w-full space-y-3">
        <a href="/Language">
          <PrimaryButton>Get Started</PrimaryButton>
        </a>
        <HelpLine />
      </div>
    </main>
  );
}