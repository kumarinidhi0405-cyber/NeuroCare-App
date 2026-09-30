import HelpLine from "@/components/HelpLine";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-5 pb-24">
      <p className="text-lg text-on-surface-variant mt-4">Good morning</p>
      <h1 className="text-2xl font-semibold text-on-surface">
        How are you feeling today?
      </h1>

      {/* Today's check-in — the main card */}
      <a
        href="/checkin"
        className="mt-6 rounded-lg bg-primary-container p-5 block"
      >
        <p className="text-lg font-semibold text-primary-on-container">
          Today's check-in
        </p>
        <p className="text-sm text-primary-on-container mt-1">
          Takes 2 minutes
        </p>
        <div className="flex gap-3 mt-4 text-2xl">
          <span>😔</span><span>🙁</span><span>😐</span><span>🙂</span><span>😄</span>
        </div>
      </a>

      {/* Shortcut grid */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <a href="/journal" className="rounded-md bg-surface-container-low p-4">
          <span className="text-2xl">🎙️</span>
          <p className="font-medium text-on-surface mt-2">Voice diary</p>
        </a>
        <a href="/toolkit" className="rounded-md bg-surface-container-low p-4">
          <span className="text-2xl">🌬️</span>
          <p className="font-medium text-on-surface mt-2">Breathe</p>
        </a>
        <a href="/counselling" className="rounded-md bg-surface-container-low p-4">
          <span className="text-2xl">💬</span>
          <p className="font-medium text-on-surface mt-2">Talk to counsellor</p>
        </a>
        <a href="/progress" className="rounded-md bg-surface-container-low p-4">
          <span className="text-2xl">🌱</span>
          <p className="font-medium text-on-surface mt-2">My progress</p>
        </a>
      </div>

      {/* Next session */}
      <div className="mt-6 rounded-md bg-surface-container-low p-4 flex items-center justify-between">
        <p className="text-sm text-on-surface-variant">
          Your next session: Thu, 4:00 PM
        </p>
        <a href="/counselling" className="text-sm font-semibold text-primary">
          View
        </a>
      </div>

      <div className="flex-1" />
      <a
  href="/crisis"
  className="block w-full text-center text-sm text-on-surface-variant py-2 rounded-full"
>
  Need help now? Tap for support
     </a>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-outline-variant flex justify-around py-3">
        <a href="/home" className="text-xs text-primary font-medium flex flex-col items-center gap-1">
          <span className="text-lg">🏠</span>Home
        </a>
        <a href="/journal" className="text-xs text-on-surface-variant flex flex-col items-center gap-1">
          <span className="text-lg">📓</span>Journal
        </a>
        <a href="/toolkit" className="text-xs text-on-surface-variant flex flex-col items-center gap-1">
          <span className="text-lg">🧰</span>Toolkit
        </a>
        <a href="/profile" className="text-xs text-on-surface-variant flex flex-col items-center gap-1">
          <span className="text-lg">👤</span>Profile
        </a>
      </nav>
    </main>
  );
}