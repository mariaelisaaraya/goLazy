import React from "react";
import { Plus, Target, DollarSign, TrendingUp, Users, UserCircle } from "lucide-react";

const COLORS = {
  bg: "#E6F2E0",
  card: "#F5F5E9",
  accent: "#A7BFA4",
  accent2: "#D6E3D0",
  text: "#5C6F5B",
  orange: "#F9B89B",
  green: "#6BCB77",
  purple: "#A7A4F9",
  shadow: "rgba(92,111,91,0.10)",
};

const mockStats = {
  activeGoals: 0,
  totalStaked: 0,
  totalEarned: 0,
};

const Home: React.FC = () => (
  <div
    style={{
      minHeight: "100vh",
      background: COLORS.bg,
      padding: "0 0 2.5rem 0",
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
    }}
  >
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1.2rem 0 1.2rem" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: COLORS.text, margin: 0 }}>Welcome to GoLazy!</h1>
          <p style={{ color: "#7A8B7A", fontSize: 17, margin: "8px 0 0 0" }}>
            Track your progress and achieve your goals with blockchain accountability
          </p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="button"
            style={{
              background: COLORS.accent,
              color: COLORS.text,
              border: "none",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              boxShadow: `0 2px 8px ${COLORS.shadow}`,
              cursor: "pointer",
            }}
            title="Profile"
          >
            <UserCircle size={26} />
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div style={{ display: "flex", gap: 24, marginBottom: 36, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 220, background: COLORS.card, borderRadius: 18, boxShadow: `0 2px 12px ${COLORS.shadow}`, padding: 24, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#7A8B7A", fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Active Goals</div>
            <div style={{ fontWeight: 900, fontSize: 28, color: COLORS.text }}>{mockStats.activeGoals}</div>
          </div>
          <Target size={36} color={COLORS.purple} />
        </div>
        <div style={{ flex: 1, minWidth: 220, background: COLORS.card, borderRadius: 18, boxShadow: `0 2px 12px ${COLORS.shadow}`, padding: 24, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#7A8B7A", fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Total Staked</div>
            <div style={{ fontWeight: 900, fontSize: 28, color: COLORS.orange }}>0 USDC</div>
          </div>
          <DollarSign size={36} color={COLORS.orange} />
        </div>
        <div style={{ flex: 1, minWidth: 220, background: COLORS.card, borderRadius: 18, boxShadow: `0 2px 12px ${COLORS.shadow}`, padding: 24, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#7A8B7A", fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Total Earned</div>
            <div style={{ fontWeight: 900, fontSize: 28, color: COLORS.green }}>0 USDC</div>
          </div>
          <TrendingUp size={36} color={COLORS.green} />
        </div>
      </div>

      {/* Botón New Goal */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 18 }}>
        <button
          type="button"
          style={{
            background: COLORS.purple,
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "0.7rem 1.5rem",
            fontWeight: 700,
            fontSize: 17,
            boxShadow: `0 2px 8px ${COLORS.shadow}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Plus size={20} /> New Goal
        </button>
      </div>

      {/* Active Goals */}
      <div style={{ background: COLORS.card, borderRadius: 22, boxShadow: `