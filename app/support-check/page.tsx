export default function SupportCheck() {
  return (
    <main className="min-h-screen flex flex-col p-5">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center mb-6">
          <span className="text-4xl">🤍</span>
        </div>
        <h1 className="text-2xl font-semibold text-on-surface">
          You're not alone
        </h1>
        <p className="text-base text-on-surface-variant mt-3">
          Thank you for telling us. Someone is available to talk right now,
          any time, day or night.
        </p>
      </div>

      <div className="space-y-3">
        <a
          href="tel:14416"
          className="w-full bg-error text-error-on font-semibold text-base
                     rounded-md py-4 flex items-center justify-center gap-2"
        >
          📞 Call Tele-MANAS now (14416)
        </a>
        <a
          href="/questionnaire-complete"
          className="block w-full text-center text-sm text-on-surface-variant py-3"
        >
          Continue to my results
        </a>
      </div>
    </main>
  );
}