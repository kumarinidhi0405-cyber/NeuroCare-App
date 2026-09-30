import RiskBadge from "@/components/RiskBadge";

const alerts = [
  {
    id: "MSJE-2026-00123",
    level: "Critical" as const,
    message: "PHQ-9 flagged a response indicating thoughts of self-harm.",
    time: "12 minutes ago",
  },
  {
    id: "MSJE-2026-00119",
    level: "High" as const,
    message: "Sudden drop in mood score over the last 3 check-ins.",
    time: "2 hours ago",
  },
  {
    id: "MSJE-2026-00104",
    level: "Medium" as const,
    message: "Missed daily check-in for 2 consecutive days.",
    time: "Yesterday",
  },
];

export default function Alerts() {
  return (
    <div
      style={{ fontFamily: "var(--font-clinical-body)" }}
      className="min-h-screen bg-[color:var(--color-clinical-surface)] flex"
    >
      {/* Sidebar */}
      <aside className="w-56 bg-[color:var(--color-clinical-card)] border-r border-[color:var(--color-clinical-border)] p-5">
        <h1
          style={{ fontFamily: "var(--font-clinical-heading)" }}
          className="text-lg font-semibold text-[color:var(--color-clinical-primary)]"
        >
          NeuroCare
        </h1>
        <p className="text-xs text-[color:var(--color-clinical-on-surface-variant)] mt-1">
          Counsellor Portal
        </p>
        <nav className="mt-8 space-y-1">
          <a href="/dashboard" className="block px-3 py-2 rounded-md text-[color:var(--color-clinical-on-surface-variant)] text-sm">
            Caseload
          </a>
          <a href="/alerts" className="block px-3 py-2 rounded-md bg-[color:var(--color-clinical-surface-container)] text-[color:var(--color-clinical-primary)] font-medium text-sm">
            Alerts
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h2
          style={{ fontFamily: "var(--font-clinical-heading)" }}
          className="text-2xl font-semibold text-[color:var(--color-clinical-on-surface)]"
        >
          Alerts Inbox
        </h2>
        <p className="text-sm text-[color:var(--color-clinical-on-surface-variant)] mt-1">
          {alerts.length} active alerts requiring attention
        </p>

        <div className="mt-6 space-y-3">
          {alerts.map((a) => (
            <div
              key={a.id + a.time}
              className={`rounded-md border p-5 flex items-start justify-between
                ${a.level === "Critical" ? "bg-[#fef2f2] border-[#fecaca]" : "bg-[color:var(--color-clinical-card)] border-[color:var(--color-clinical-border)]"}`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <RiskBadge level={a.level} />
                  <a
                    href={`/cases/${a.id}`}
                    className="font-semibold text-[color:var(--color-clinical-on-surface)]"
                  >
                    {a.id}
                  </a>
                </div>
                <p className="text-sm text-[color:var(--color-clinical-on-surface)] mt-2">
                  {a.message}
                </p>
                <p className="text-xs text-[color:var(--color-clinical-on-surface-variant)] mt-1">
                  {a.time}
                </p>
              </div>
              <a
                href={`/cases/${a.id}`}
                className="text-sm font-medium text-[color:var(--color-clinical-primary)] whitespace-nowrap"
              >
                View case →
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}