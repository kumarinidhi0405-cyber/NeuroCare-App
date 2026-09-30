import RiskBadge from "@/components/RiskBadge";

const cases = [
  { id: "MSJE-2026-00123", name: "Case A", risk: "Critical", lastCheckin: "2 hours ago" },
  { id: "MSJE-2026-00119", name: "Case B", risk: "High", lastCheckin: "5 hours ago" },
  { id: "MSJE-2026-00104", name: "Case C", risk: "Medium", lastCheckin: "Yesterday" },
  { id: "MSJE-2026-00098", name: "Case D", risk: "Low", lastCheckin: "2 days ago" },
  { id: "MSJE-2026-00087", name: "Case E", risk: "Medium", lastCheckin: "3 days ago" },
] as const;

export default function Dashboard() {
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
          <a href="/dashboard" className="block px-3 py-2 rounded-md bg-[color:var(--color-clinical-surface-container)] text-[color:var(--color-clinical-primary)] font-medium text-sm">
            Caseload
          </a>
          <a href="/alerts" className="block px-3 py-2 rounded-md text-[color:var(--color-clinical-on-surface-variant)] text-sm">
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
          Active Caseload
        </h2>
        <p className="text-sm text-[color:var(--color-clinical-on-surface-variant)] mt-1">
          {cases.length} clients assigned to you
        </p>

        <div className="mt-6 bg-[color:var(--color-clinical-card)] rounded-md border border-[color:var(--color-clinical-border)] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--color-clinical-surface-container-low)] text-left">
              <tr className="text-[color:var(--color-clinical-on-surface-variant)]">
                <th className="px-5 py-3 font-medium">Case ID</th>
                <th className="px-5 py-3 font-medium">Risk</th>
                <th className="px-5 py-3 font-medium">Last check-in</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} className="border-t border-[color:var(--color-clinical-border)]">
                  <td className="px-5 py-4 text-[color:var(--color-clinical-on-surface)] font-medium">
                    {c.id}
                  </td>
                  <td className="px-5 py-4">
                    <RiskBadge level={c.risk} />
                  </td>
                  <td className="px-5 py-4 text-[color:var(--color-clinical-on-surface-variant)]">
                    {c.lastCheckin}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href={`/cases/${c.id}`}
                      className="text-[color:var(--color-clinical-primary)] font-medium"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}