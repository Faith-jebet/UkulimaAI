import t from "../i18n";

export default function TabBar({ active, onSwitch, lang }) {
  const T = t[lang];
  return (
    <div className="flex bg-[#1a2e1a] rounded-xl p-1 gap-1 mb-7">
      <button
        onClick={() => active !== "login" && onSwitch()}
        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold font-serif transition-all cursor-pointer border-0 ${
          active === "login"
            ? "bg-[#4a9c4a] text-white"
            : "bg-transparent text-[#7a9a7a] hover:text-[#aacaaa]"
        }`}
      >
        {T.tabLogin}
      </button>
      <button
        onClick={() => active !== "signup" && onSwitch()}
        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold font-serif transition-all cursor-pointer border-0 ${
          active === "signup"
            ? "bg-[#4a9c4a] text-white"
            : "bg-transparent text-[#7a9a7a] hover:text-[#aacaaa]"
        }`}
      >
        {T.tabSignup}
      </button>
    </div>
  );
}
