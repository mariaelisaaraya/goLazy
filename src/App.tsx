import "./App.module.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Debugger from "./pages/Debugger.tsx";
import { useWallet } from "./hooks/useWallet";
import { useWalletBalance } from "./hooks/useWalletBalance";
import FundAccountButton from "./components/FundAccountButton";
import logo from "./images/logo.png";

const COLORS = {
  bg: "#E6F2E0",
  text: "#5C6F5B",
};

const AppLayout: React.FC = () => {
  const { address } = useWallet();
  const { xlm, isLoading } = useWalletBalance();

  return (
    <main>
      <header
        style={{
          width: "100%",
          background: COLORS.bg,
          padding: "1.2rem 0.5rem 1.2rem 0.5rem",
          boxShadow: "0 2px 8px rgba(92,111,91,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 0,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={logo} alt="GoLazy logo" style={{ width: 36, height: 36, objectFit: "contain", marginRight: 8 }} />
          <span
            style={{
              fontWeight: 900,
              fontSize: 26,
              color: COLORS.text,
              letterSpacing: "-1.5px",
              fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
            }}
          >
            GoLazy
          </span>
        </div>
        {address && (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ color: COLORS.text, fontWeight: 700, fontSize: 16, background: "#fff", borderRadius: 8, padding: "0.3rem 0.8rem", boxShadow: "0 1px 4px rgba(92,111,91,0.08)" }}>
              {isLoading ? "..." : `${xlm} XLM`}
            </span>
            <FundAccountButton />
          </div>
        )}
      </header>
      <Outlet />
    </main>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/debug" element={<Debugger />} />
        <Route path="/debug/:contractName" element={<Debugger />} />
      </Route>
    </Routes>
  );
}

export default App;
