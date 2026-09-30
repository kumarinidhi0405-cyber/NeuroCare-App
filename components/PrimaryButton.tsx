export default function PrimaryButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full bg-primary text-primary-on font-semibold text-base
                 rounded-md py-4 flex items-center justify-center gap-2
                 active:opacity-90 transition-opacity"
      {...props}
    >
      {children}
    </button>
  );
}
