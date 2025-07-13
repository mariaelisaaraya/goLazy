import React, { useEffect, useRef } from "react";
import { Button } from "@stellar/design-system";
import { useWallet } from "../hooks/useWallet";
import { connectWallet } from "../util/wallet";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { Wallet } from "lucide-react";

const COLORS = {
  background1: "#A7BFA4",
  background2: "#D6E3D0",
  background3: "#B7D3B0",
  background4: "#E6F2E0",
  card: "#D6E3D0",
  textMain: "#F5F5E9",
  textDark: "#5C6F5B",
  button: "#F9B89B",
  buttonHover: "#F89A6B",
};

const animatedButtonStyle = {
  background: COLORS.button,
  color: COLORS.textDark,
  fontWeight: 700,
  fontSize: "1.1rem",
  border: "none",
  borderRadius: "2rem",
  padding: "0.9rem 2.5rem",
  boxShadow: "0 2px 8px rgba(92,111,91,0.10)",
  marginTop: "2.5rem",
  marginLeft: "auto",
  marginRight: "auto",
  transition: "background 0.2s, transform 0.18s, box-shadow 0.18s, filter 0.18s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.7rem",
  outline: "none",
  width: "fit-content",
  minWidth: 220,
};

const Login: React.FC = () => {
  const { address, isPending } = useWallet();
  const navigate = useNavigate();
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (address) {
      navigate("/");
    }
  }, [address, navigate]);

  // Animación de escala y resplandor en hover para el botón
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = COLORS.buttonHover;
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(249,184,155,0.25), 0 2px 8px rgba(92,111,91,0.10)";
    e.currentTarget.style.filter = "brightness(1.08) drop-shadow(0 0 8px #F9B89B88)";
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = COLORS.button;
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(92,111,91,0.10)";
    e.currentTarget.style.filter = "none";
  };

  // Animación bounce al logo al hacer hover
  const handleLogoMouseOver = () => {
    if (logoRef.current) {
      logoRef.current.classList.add("logo-bounce");
    }
  };
  const handleLogoMouseOut = () => {
    if (logoRef.current) {
      logoRef.current.classList.remove("logo-bounce");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* Fondo degradado animado con movimiento suave */}
      <div
        className="animated-bg"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          width: "100%",
          maxWidth: 900,
          padding: "1.2rem 0.5rem",
        }}
      >
        {/* Logo grande a la izquierda */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "0 0 auto",
            marginRight: 0,
          }}
        >
          <img
            ref={logoRef}
            src={logo}
            alt="GoLazy logo"
            style={{
              width: 540,
              height: 540,
              objectFit: "contain",
              display: "block",
              transition: "transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)",
              cursor: "pointer",
              marginRight: 0,
            }}
            onMouseOver={handleLogoMouseOver}
            onMouseOut={handleLogoMouseOut}
          />
        </div>
        {/* Tarjeta de login a la derecha */}
        <div
          style={{
            background: COLORS.card,
            borderRadius: "2.2rem",
            boxShadow: "0 6px 32px rgba(92,111,91,0.13)",
            padding: "1.5rem 1.2rem 1.7rem 1.2rem",
            minWidth: 320,
            maxWidth: 400,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.7rem",
              fontWeight: 900,
              color: COLORS.textDark,
              margin: 0,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              textShadow: "0 2px 8px rgba(92,111,91,0.08)",
            }}
          >
            GoLazy
          </h1>
          <p
            style={{
              color: "#6B7A6B",
              fontSize: "1.18rem",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 500,
              letterSpacing: "-0.2px",
            }}
          >
            Connect your wallet to start investing in yourself.
          </p>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "1.2rem" }}>
            <Button
              size="lg"
              variant="primary"
              style={{
                ...animatedButtonStyle,
                fontSize: "1.18rem",
                padding: "1.1rem 2.7rem",
                minWidth: 240,
                fontWeight: 800,
                borderRadius: "2.5rem",
                boxShadow: "0 4px 18px 0 rgba(249,184,155,0.13)",
              }}
              disabled={isPending}
              onClick={() => { void connectWallet(); }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isPending ? (
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="loader" style={{ width: 18, height: 18, border: "3px solid #F5F5E9", borderTop: "3px solid #F9B89B", borderRadius: "50%", animation: "spin 1s linear infinite", marginRight: 8 }} />
                  Connecting...
                </span>
              ) : (
                <>
                  <Wallet size={24} style={{ marginBottom: -2, marginRight: 6 }} />
                  Connect Wallet
                </>
              )}
            </Button>
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .login-horizontal {
              flex-direction: column !important;
              gap: 1.5rem !important;
            }
            .login-horizontal > div {
              max-width: 100% !important;
            }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeBg {
            0% { filter: brightness(1) blur(0px); }
            100% { filter: brightness(1.08) blur(2.5px); }
          }
          .logo-bounce {
            animation: bounce 0.7s cubic-bezier(.68,-0.55,.27,1.55);
          }
          @keyframes bounce {
            0%   { transform: scale(1) translateY(0); }
            30%  { transform: scale(1.12, 0.88) translateY(-8px); }
            50%  { transform: scale(0.95, 1.05) translateY(4px); }
            70%  { transform: scale(1.05, 0.95) translateY(-2px); }
            100% { transform: scale(1) translateY(0); }
          }
          .animated-bg {
            background: radial-gradient(circle at 60% 40%, #E6F2E0 0%, #B7D3B0 40%, #A7BFA4 80%, #D6E3D0 100%);
            background-size: 200% 200%;
            animation: moveBg 12s ease-in-out infinite alternate;
          }
          @keyframes moveBg {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Login;