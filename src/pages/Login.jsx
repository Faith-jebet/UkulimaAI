import { useState } from "react";
import Navbar      from "../components/Navbar";
import TabBar      from "../components/TabBar";
import InputField  from "../components/InputField";
import GoogleButton from "../components/GoogleButton";
import Divider     from "../components/Divider";
import t           from "../i18n";

export default function Login({ onSwitch, lang, setLang }) {
  const T = t[lang];

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const stats = [
    { num: "10K+", lbl: T.stat1Lbl },
    { num: "47",   lbl: T.stat2Lbl },
    { num: "98%",  lbl: T.stat3Lbl },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${T.loginAlert} ${email}`);
  }

  return (
    <div className="min-h-screen bg-[#1a2e1a] flex flex-col font-serif">
      <Navbar lang={lang} setLang={setLang} />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[430px] bg-[#243824] border border-[#2d4a2d] rounded-[18px] p-9">

          <h1 className="text-white text-[26px] font-bold mb-1">{T.loginHeading}</h1>
          <p className="text-[#e8c547] text-[13px] mb-7">{T.loginSubtitle}</p>

          <TabBar active="login" onSwitch={onSwitch} lang={lang} />

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <InputField
              label={T.emailLabel}
              id="login-email"
              type="email"
              placeholder={T.emailPH}
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="login-password" className="text-[#c8d8c8] text-[13px] font-medium">
                  {T.passwordLabel}
                </label>
                <a href="#" className="text-[#4a9c4a] text-xs hover:text-[#6abf6a] hover:underline no-underline">
                  {T.forgotPass}
                </a>
              </div>
              <InputField
                id="login-password"
                type="password"
                placeholder={T.passwordPH}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#4a9c4a] cursor-pointer"
              />
              <span className="text-[#8aaa8a] text-[13px]">{T.rememberMe}</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#e8c547] text-[#1a2e1a] font-bold text-[15px] font-serif rounded-[9px] py-3 border-0 cursor-pointer hover:bg-[#d4b03c] active:scale-[0.98] transition-all mb-4"
            >
              {T.loginBtn}
            </button>
          </form>

          <Divider label={T.orDivider} />
          <GoogleButton label={T.googleLogin} />

          <p className="text-center text-[13px] text-[#6a8a6a] mt-5 mb-0">
            {T.noAccount}{" "}
            <button
              onClick={onSwitch}
              className="text-[#4a9c4a] bg-transparent border-0 cursor-pointer hover:text-[#6abf6a] hover:underline p-0 text-[13px] font-serif"
            >
              {T.signupLink}
            </button>
          </p>

          {/* Stats */}
          <div className="flex gap-2 mt-7">
            {stats.map((s) => (
              <div
                key={s.lbl}
                className="flex-1 bg-[#1a2e1a] border border-[#2d4a2d] rounded-[10px] py-2.5 px-2 text-center"
              >
                <div className="text-[#e8c547] text-[15px] font-bold">{s.num}</div>
                <div className="text-[#6a8a6a] text-[11px] mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer T={T} />
    </div>
  );
}

function Footer({ T }) {
  return (
    <footer className="text-center py-4 text-[#4a6a4a] text-[12px] border-t border-[#2d4a2d]">
      © 2026 Kilimo AI —{" "}
      <a href="#" className="text-[#4a9c4a] no-underline hover:underline">{T.footerPrivacy}</a>
      {" · "}
      <a href="#" className="text-[#4a9c4a] no-underline hover:underline">{T.footerTerms}</a>
    </footer>
  );
}
