import { useState } from "react";
import Login  from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [page, setPage] = useState("login");
  const [lang, setLang] = useState("sw"); // "sw" | "en" — lifted so Navbar + pages share it

  const sharedProps = {
    lang,
    setLang,
    onSwitch: () => setPage((p) => (p === "login" ? "signup" : "login")),
  };

  return page === "login"
    ? <Login  {...sharedProps} />
    : <Signup {...sharedProps} />;
}
