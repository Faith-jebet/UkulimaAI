export default function GoogleButton({ label = "Endelea na Google" }) {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2.5 bg-transparent border border-[#3a5a3a] text-[#c8d8c8] rounded-[9px] py-3 text-sm font-semibold font-serif hover:border-[#4a9c4a] hover:text-[#4a9c4a] transition-all cursor-pointer"
    >
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 3.1 29.5 1 24 1 14.9 1 7.1 6.5 3.8 14.2l7 5.4C12.6 13.1 17.8 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.3 5.7c4.3-4 6.3-9.9 7.3-16.9z" />
        <path fill="#FBBC05" d="M10.8 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5L3.8 14c-1.5 3-2.3 6.3-2.3 10s.8 7 2.3 10l7-5.5z" />
        <path fill="#34A853" d="M24 46.5c5.5 0 10.1-1.8 13.5-4.9l-7.3-5.7c-1.9 1.3-4.2 2-6.2 2-6.2 0-11.4-3.6-13.2-9L3.8 34c3.3 7.7 11.1 12.5 20.2 12.5z" />
      </svg>
      {label}
    </button>
  );
}
