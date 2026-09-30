const kpis = [
  { label: "Total active cases", value: "1,284" },
  { label: "Avg. response time", value: "18 min" },
  { label: "Recovery rate", value: "67%" },
  { label: "Critical alerts (7d)", value: "9" },
];

const stateData = [
  { state: "Maharashtra", level: "High" },
  { state: "Uttar Pradesh", level: "Medium" },
  { state: "Bihar", level: "High" },
  { state: "Tamil Nadu", level: "Low" },
  { state: "West Bengal", level: "Medium" },
  { state: "Karnataka", level: "Low" },
  { state: "Rajasthan", level: "Medium" },
  { state: "Madhya Pradesh", level: "High" },
  { state: "Gujarat", level: "Low" },
];

const levelColor: Record<string, string> = {
  Low: "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]",
  Medium: "bg-[#fffbeb] text-[#b45309] border-[#fde68a]",
  High: "bg-[#fef2f2] text-[#991b1b] border-[#fecaca]",
};

const auditLog = [
  { time: "10:42 AM", action: "Case escalated to Critical", role: "System" },
  { time: "09:15 AM", action: "Counsellor accessed case file", role: "Counsellor" },
  { time: "Yesterday", action: "New case onboarded", role: "Protection Officer" },
];

export default function AdminDashboard() {
  return (
    <div
      style={{ fontFamily: "var(--font-admin)" }}
      className="min-h-screen bg-[color:var(--color-admin-surface)] flex"
    >
      {/* Sidebar */}
      <aside className="w-56 bg-[color:var(--color-admin-card)] border-r border-[color:var(--color-admin-border)] p-5">
        <h1 className="text-lg font-semibold text-[color:var(--color-admin-primary)]">
          NeuroCare
        </h1>
        <p className="text-xs text-[color:var(--color-admin-on-surface-variant)] mt-1">
          MoSJE Admin
        </p>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-[color:var(--color-admin-on-surface)]">
          National Overview
        </h2>
        <p className="text-sm text-[color:var(--color-admin-on-surface-variant)] mt-1">
          Anonymized, aggregate data only
        </p>

        {/* KPI row */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="bg-[color:var(--color-admin-card)] border border-[color:var(--color-admin-border)] rounded-md p-4"
            >
              <p className="text-xs text-[color:var(--color-admin-on-surface-variant)]">
                {k.label}
              </p>
              <p className="text-2xl font-semibold text-[color:var(--color-admin-on-surface)] mt-1">
                {k.value}
              </p>
            </div>
          ))}
        </div>

        {/* Simplified state-level heatmap */}
        <div className="mt-6 bg-[color:var(--color-admin-card)] border border-[color:var(--color-admin-border)] rounded-md p-5">
          <h3 className="font-semibold text-[color:var(--color-admin-on-surface)]">
            Distress Level by State
          </h3>
          <p className="text-xs text-[color:var(--color-admin-on-surface-variant)] mt-1">
            Aggregated and anonymized — no individual case data
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {stateData.map((s) => (
              <div
                key={s.state}
                className={`rounded-md border px-4 py-3 flex items-center justify-between ${levelColor[s.level]}`}
              >
                <span className="text-sm font-medium">{s.state}</span>
                <span className="text-xs font-semibold">{s.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audit log */}
        <div className="mt-6 bg-[color:var(--color-admin-card)] border border-[color:var(--color-admin-border)] rounded-md overflow-hidden">
          <div className="p-5 pb-0">
            <h3 className="font-semibold text-[color:var(--color-admin-on-surface)]">
              Audit Log
            </h3>
          </div>
          <table className="w-full text-sm mt-3">
            <thead className="bg-[color:var(--color-admin-surface-container-low)] text-left">
              <tr className="text-[color:var(--color-admin-on-surface-variant)]">
                <th className="px-5 py-2 font-medium">Time</th>
                <th className="px-5 py-2 font-medium">Action</th>
                <th className="px-5 py-2 font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {auditLog.map((a, i) => (
                <tr key={i} className="border-t border-[color:var(--color-admin-border)]">
                  <td className="px-5 py-3 text-[color:var(--color-admin-on-surface-variant)]">{a.time}</td>
                  <td className="px-5 py-3 text-[color:var(--color-admin-on-surface)]">{a.action}</td>
                  <td className="px-5 py-3 text-[color:var(--color-admin-on-surface-variant)]">{a.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}