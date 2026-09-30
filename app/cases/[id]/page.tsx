"use client";

import { useParams } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import RiskBadge from "@/components/RiskBadge";

const moodHistory = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 2 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 1 },
  { day: "Fri", mood: 2 },
  { day: "Sat", mood: 3 },
  { day: "Sun", mood: 2 },
];

const journalEntries = [
  { date: "Sun", snippet: "Felt a bit more settled today, slept better." },
  { date: "Fri", snippet: "Anxious before the hearing, hard to focus." },
  { date: "Wed", snippet: "Difficult day, felt isolated." },
];

export default function CaseDetail() {
  const params = useParams();
  const caseId = params.id as string;

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
          <a href="/alerts" className="block px-3 py-2 rounded-md text-[color:var(--color-clinical-on-surface-variant)] text-sm">
            Alerts
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <a href="/dashboard" className="text-sm text-[color:var(--color-clinical-primary)]">
          ← Back to caseload
        </a>

        <div className="flex items-center gap-3 mt-3">
          <h2
            style={{ fontFamily: "var(--font-clinical-heading)" }}
            className="text-2xl font-semibold text-[color:var(--color-clinical-on-surface)]"
          >
            {caseId}
          </h2>
          <RiskBadge level="Critical" />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Mood timeline */}
          <div className="col-span-2 bg-[color:var(--color-clinical-card)] rounded-md border border-[color:var(--color-clinical-border)] p-5">
            <h3
              style={{ fontFamily: "var(--font-clinical-heading)" }}
              className="font-semibold text-[color:var(--color-clinical-on-surface)]"
            >
              7-Day Mood Timeline
            </h3>
            <div className="h-56 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodHistory}>
                  <XAxis dataKey="day" stroke="#707976" fontSize={12} />
                  <YAxis domain={[0, 4]} stroke="#707976" fontSize={12} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="#0e5246"
                    strokeWidth={2}
                    dot={{ fill: "#0e5246" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-[color:var(--color-clinical-on-surface-variant)] mt-2">
              Scale: 0 (struggling) to 4 (great)
            </p>
          </div>

          {/* Notes panel */}
          <div className="bg-[color:var(--color-clinical-card)] rounded-md border border-[color:var(--color-clinical-border)] p-5">
            <h3
              style={{ fontFamily: "var(--font-clinical-heading)" }}
              className="font-semibold text-[color:var(--color-clinical-on-surface)]"
            >
              Recent Journal Sentiment
            </h3>
            <div className="mt-4 space-y-3">
              {journalEntries.map((j) => (
                <div key={j.date} className="border-l-2 border-[color:var(--color-clinical-secondary)] pl-3">
                  <p className="text-xs text-[color:var(--color-clinical-on-surface-variant)]">{j.date}</p>
                  <p className="text-sm text-[color:var(--color-clinical-on-surface)] mt-1">{j.snippet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counsellor notes */}
        <div className="mt-6 bg-[color:var(--color-clinical-card)] rounded-md border border-[color:var(--color-clinical-border)] p-5">
          <h3
            style={{ fontFamily: "var(--font-clinical-heading)" }}
            className="font-semibold text-[color:var(--color-clinical-on-surface)]"
          >
            Counsellor Notes
          </h3>
          <textarea
            placeholder="Add a session note..."
            rows={3}
            className="w-full mt-3 rounded-md border border-[color:var(--color-clinical-border)] p-3 text-sm outline-none"
          />
        </div>
      </main>
    </div>
  );
}