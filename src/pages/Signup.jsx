import { useState } from "react";
import Navbar       from "../components/Navbar";
import TabBar       from "../components/TabBar";
import InputField   from "../components/InputField";
import GoogleButton from "../components/GoogleButton";
import Divider      from "../components/Divider";
import t            from "../i18n";

const COUNTIES = [
  { group: "Nairobi Region",  items: ["Nairobi"] },
  { group: "Rift Valley",     items: ["Nakuru", "Uasin Gishu (Eldoret)", "Baringo", "Laikipia", "Nandi", "Kericho", "Bomet"] },
  { group: "Western",         items: ["Kisumu", "Busia", "Kakamega", "Vihiga", "Siaya", "Homabay", "Migori", "Kisii", "Nyamira"] },
  { group: "Coast",           items: ["Mombasa", "Kilifi", "Kwale", "Taita Taveta", "Lamu", "Tana River"] },
  { group: "Central",         items: ["Kiambu", "Murang'a", "Nyeri", "Kirinyaga", "Nyandarua"] },
  { group: "Eastern",         items: ["Machakos", "Makueni", "Kitui", "Meru", "Embu", "Tharaka-Nithi", "Isiolo"] },
  { group: "North Eastern",   items: ["Garissa", "Wajir", "Mandera"] },
  { group: "Nyanza",          items: ["Homa Bay", "Migori", "Kisii"] },
];

function getStrength(val, T) {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const colors = ["#e24b4a", "#e8c547", "#4a9c4a", "#2d7a2d"];
  const labels = [T.strength1, T.strength2, T.strength3, T.strength4];
  return { score, color: colors[score - 1] || "#2d4a2d", label: val.length ? labels[score - 1] : "" };
}

export default function Signup({ onSwitch, lang, setLang }) {
  const T = t[lang];

  const BENEFITS = [
    { icon: "🌦️", text: T.b1 },
    { icon: "📊", text: T.b2 },
    { icon: "🤖", text: T.b3 },
    { icon: "🔒", text: T.b4 },
  ];

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    county: "", password: "", confirm: "",
  });
  const [agreed, setAgreed] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const strength = getStrength(form.password, T);

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) { alert(T.mismatch); return; }
    alert(`${T.signupAlert} ${form.email}`);
  }

  return (
    <div className="min-h-screen bg-[#1a2e1a] flex flex-col font-serif">
      <Navbar lang={lang} setLang={setLang} />

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[460px] bg-[#243824] border border-[#2d4a2d] rounded-[18px] p-9">

          <h1 className="text-white text-[26px] font-bold mb-1">{T.signupHeading}</h1>
          <p className="text-[#e8c547] text-[13px] mb-7">{T.signupSubtitle}</p>

          <TabBar active="signup" onSwitch={onSwitch} lang={lang} />

          <form onSubmit={handleSubmit}>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3 mb-1">
              <InputField label={T.firstName} id="first-name" placeholder={T.firstNamePH}
                autoComplete="given-name" value={form.firstName} onChange={set("firstName")} />
              <InputField label={T.lastName} id="last-name" placeholder={T.lastNamePH}
                autoComplete="family-name" value={form.lastName} onChange={set("lastName")} />
            </div>

            {/* Email */}
            <InputField label={T.emailLabel} id="signup-email" type="email"
              placeholder={T.emailPH} autoComplete="email"
              value={form.email} onChange={set("email")} />

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-[#c8d8c8] text-[13px] font-medium mb-1.5">
                {T.phoneLabel}
              </label>
              <div className="flex">
                <span className="bg-[#1a2e1a] border border-r-0 border-[#3a5a3a] text-[#8aaa8a] rounded-l-[9px] px-3 py-2.5 text-sm font-serif whitespace-nowrap">
                  🇰🇪 +254
                </span>
                <input
                  type="tel"
                  placeholder="712 345 678"
                  autoComplete="tel-national"
                  value={form.phone}
                  onChange={set("phone")}
                  className="flex-1 bg-[#1a2e1a] border border-[#3a5a3a] text-[#e8f0e8] rounded-r-[9px] px-3.5 py-2.5 text-sm font-serif placeholder-[#4a6a4a] outline-none focus:border-[#4a9c4a] focus:ring-2 focus:ring-[#4a9c4a]/20 transition-all"
                />
              </div>
            </div>

            {/* County */}
            <div className="mb-4">
              <label htmlFor="signup-county" className="block text-[#c8d8c8] text-[13px] font-medium mb-1.5">
                {T.countyLabel}
              </label>
              <select
                id="signup-county"
                value={form.county}
                onChange={set("county")}
                className="w-full bg-[#1a2e1a] border border-[#3a5a3a] text-[#e8f0e8] rounded-[9px] px-3.5 py-2.5 text-sm font-serif outline-none focus:border-[#4a9c4a] focus:ring-2 focus:ring-[#4a9c4a]/20 transition-all cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234a6a4a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  paddingRight: "36px",
                }}
              >
                <option value="" style={{ background: "#1a2e1a" }}>{T.countyPH}</option>
                {COUNTIES.map(({ group, items }) => (
                  <optgroup key={group} label={group} style={{ background: "#1a2e1a", color: "#6a8a6a" }}>
                    {items.map((c) => (
                      <option key={c} value={c.toLowerCase()} style={{ background: "#1a2e1a", color: "#e8f0e8" }}>
                        {c}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="signup-password" className="block text-[#c8d8c8] text-[13px] font-medium mb-1.5">
                {T.passwordLabel}
              </label>
              <InputField
                id="signup-password"
                type="password"
                placeholder={T.newPasswordPH}
                autoComplete="new-password"
                value={form.password}
                onChange={set("password")}
              />
              {form.password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="flex-1 h-[3px] rounded-sm transition-all duration-300"
                        style={{ background: i <= strength.score ? strength.color : "#2d4a2d" }}
                      />
                    ))}
                  </div>
                  <p className="text-[11px]" style={{ color: strength.color }}>{strength.label}</p>
                </div>
              )}
            </div>

            {/* Confirm password */}
            <InputField
              label={T.confirmLabel}
              id="confirm-password"
              type="password"
              placeholder={T.confirmPH}
              autoComplete="new-password"
              value={form.confirm}
              onChange={set("confirm")}
            />

            {/* Terms */}
            <label className="flex items-start gap-2.5 mb-6 cursor-pointer mt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-[#4a9c4a] cursor-pointer shrink-0"
              />
              <span className="text-[#8aaa8a] text-[13px] leading-relaxed">
                {T.termsText}{" "}
                <a href="#" className="text-[#4a9c4a] no-underline hover:underline">{T.termsLink}</a>
                {" "}{T.andText}{" "}
                <a href="#" className="text-[#4a9c4a] no-underline hover:underline">{T.privacyLink}</a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full bg-[#e8c547] text-[#1a2e1a] font-bold text-[15px] font-serif rounded-[9px] py-3 border-0 cursor-pointer hover:bg-[#d4b03c] active:scale-[0.98] transition-all mb-4 disabled:bg-[#5a5a2a] disabled:text-[#9a9a6a] disabled:cursor-not-allowed"
            >
              {T.signupBtn}
            </button>
          </form>

          <Divider label={T.orDivider} />
          <GoogleButton label={T.googleSignup} />

          <p className="text-center text-[13px] text-[#6a8a6a] mt-5 mb-0">
            {T.hasAccount}{" "}
            <button
              onClick={onSwitch}
              className="text-[#4a9c4a] bg-transparent border-0 cursor-pointer hover:text-[#6abf6a] hover:underline p-0 text-[13px] font-serif"
            >
              {T.loginLink}
            </button>
          </p>

          {/* Benefits */}
          <div className="flex gap-2 mt-7">
            {BENEFITS.map((b) => (
              <div
                key={b.text}
                className="flex-1 bg-[#1a2e1a] border border-[#2d4a2d] rounded-[10px] py-2.5 px-1.5 text-center"
              >
                <div className="text-lg mb-1">{b.icon}</div>
                <div className="text-[#6a8a6a] text-[10px] leading-snug">{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-4 text-[#4a6a4a] text-[12px] border-t border-[#2d4a2d]">
        © 2026 Kilimo AI —{" "}
        <a href="#" className="text-[#4a9c4a] no-underline hover:underline">{T.footerPrivacy}</a>
        {" · "}
        <a href="#" className="text-[#4a9c4a] no-underline hover:underline">{T.footerTerms}</a>
      </footer>
    </div>
  );
}
