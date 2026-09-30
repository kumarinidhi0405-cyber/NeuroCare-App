export default function Crisis() {
  return (
    <main className="min-h-screen flex flex-col p-5 bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center mb-6">
          <span className="text-4xl">🤍</span>
        </div>
        <h1 className="text-2xl font-semibold text-on-surface">
          You're safe here
        </h1>
        <p className="text-base text-on-surface-variant mt-3">
          Someone is available to talk right now, any time, day or night.
          <br />
          Your counsellor is being notified.
        </p>
      </div>

      <div className="space-y-3">
        <a
          href="tel:14416"
          className="w-full bg-error text-error-on font-semibold text-lg
                     rounded-md py-5 flex items-center justify-center gap-2"
        >
          📞 Call Tele-MANAS (14416)
        </a>
        <a
          href="tel:18005990019"
          className="w-full bg-surface-container-low text-on-surface font-semibold text-base
                     rounded-md py-4 flex items-center justify-center gap-2"
        >
          📞 Call Kiran Helpline (1800-599-0019)
        </a>
        <a
          href="/home"
          className="block w-full text-center text-sm text-on-surface-variant py-3"
        >
          I'm okay, take me back
        </a>
      </div>
    </main>
  );
}