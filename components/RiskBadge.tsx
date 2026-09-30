type Risk = "Low" | "Medium" | "High" | "Critical";

const styles: Record<Risk, string> = {
  Low: "text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]",
  Medium: "text-[#b45309] bg-[#fffbeb] border-[#fde68a]",
  High: "text-[#c2410c] bg-[#fff7ed] border-[#ffedd5]",
  Critical: "text-[#991b1b] bg-[#fef2f2] border-[#fecaca]",
};

export default function RiskBadge({ level }: { level: Risk }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full border text-xs font-semibold ${styles[level]}`}
    >
      {level}
    </span>
  );
}