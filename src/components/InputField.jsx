import { useState } from "react";

export default function InputField({
  label,
  id,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
  children,
}) {
  const [showPass, setShowPass] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword ? (showPass ? "text" : "password") : type;

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-[#c8d8c8] text-[13px] font-medium mb-1.5"
      >
        {label}
      </label>

      {children ? (
        children
      ) : (
        <div className="relative">
          <input
            id={id}
            type={resolvedType}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            className="w-full bg-[#1a2e1a] border border-[#3a5a3a] text-[#e8f0e8] rounded-[9px] px-3.5 py-2.5 text-sm font-serif placeholder-[#4a6a4a] outline-none focus:border-[#4a9c4a] focus:ring-2 focus:ring-[#4a9c4a]/20 transition-all pr-10"
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPass((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a6a4a] hover:text-[#8aaa8a] bg-transparent border-0 cursor-pointer p-0 leading-none"
              aria-label="Toggle password visibility"
            >
              {showPass ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
