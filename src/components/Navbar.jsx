import {Sprout} from "lucide-react";
export default function Navbar({ lang, setLang }) {
  return (
    <>
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2e1a] border-b border-[#2d4a2d] px-6 h-14 flex items-center justify-between shadow-lg">
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 bg-[#4a9c4a] rounded-full flex items-center justify-center shrink-0">
           <div className="w-9 h-9 bg-[#4a9c4a] rounded-full flex items-center justify-center shrink-0">
            <Sprout size={20} color="white" strokeWidth={2} />
          </div>
          </div>
          <span className="text-white font-bold text-lg font-serif">Kilimo AI</span>
        </a>

        {/* Language toggle */}
        <div className="flex items-center gap-1 bg-[#132213] border border-[#2d4a2d] rounded-full p-1">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border-0 ${
              lang === "en"
                ? "bg-[#4a9c4a] text-white shadow-sm"
                : "bg-transparent text-[#6a8a6a] hover:text-[#aacaaa]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("sw")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border-0 ${
              lang === "sw"
                ? "bg-[#4a9c4a] text-white shadow-sm"
                : "bg-transparent text-[#6a8a6a] hover:text-[#aacaaa]"
            }`}
          >
            SW
          </button>
        </div>
      </nav>

      {/* Spacer so page content clears the fixed bar */}
      <div className="h-14 shrink-0" />
    </>
  );
}
