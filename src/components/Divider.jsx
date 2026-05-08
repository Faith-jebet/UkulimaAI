export default function Divider({ label = "au / or" }) {
  return (
    <div className="flex items-center gap-2.5 text-[#4a6a4a] text-xs my-4">
      <span className="flex-1 h-px bg-[#2d4a2d]" />
      {label}
      <span className="flex-1 h-px bg-[#2d4a2d]" />
    </div>
  );
}
