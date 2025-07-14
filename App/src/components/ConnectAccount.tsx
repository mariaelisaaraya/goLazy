import React from "react";
import { stellarNetwork } from "../contracts/util";
import FundAccountButton from "./FundAccountButton";
import { WalletButton } from "./WalletButton";
import NetworkPill from "./NetworkPill";

const ConnectAccount: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "20px",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}
    >
      {/* Wallet Button Container */}
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          transform: "scale(1.1)",
          transition: "transform 0.3s ease"
        }}>
          <WalletButton />
        </div>
      </div>

      {/* Additional buttons row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {stellarNetwork !== "PUBLIC" && (
          <div style={{
            transform: "scale(0.9)"
          }}>
            <FundAccountButton />
          </div>
        )}
        <div style={{
          transform: "scale(0.9)"
        }}>
          <NetworkPill />
        </div>
      </div>
    </div>
  );
};

export default ConnectAccount;