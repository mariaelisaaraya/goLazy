import { useState } from "react";
import { Button, Text, Modal, Profile } from "@stellar/design-system";
import { useWallet } from "../hooks/useWallet";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { connectWallet, disconnectWallet } from "../util/wallet";
import useGlobalAuthenticationStore from "../store/wallet";

export const WalletButton = () => {
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const { address, isPending } = useWallet();
  const { xlm, ...balance } = useWalletBalance();
  const buttonLabel = isPending ? "Conectando..." : "Conectar Wallet";

  // Función para manejar la conexión con redirección
  const handleConnectWithRedirect = async () => {
    try {
      await connectWallet();
      // Después de conectar exitosamente, redirigir al dashboard
      if (useGlobalAuthenticationStore.getState().address) {
        window.location.href = "http://localhost:3000/dashboard";
      }
    } catch (error) {
      console.error("Error al conectar wallet:", error);
    }
  };

  if (!address) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px"
      }}>
        <button
          onClick={handleConnectWithRedirect}
          style={{
            padding: "12px 24px",
            background: "linear-gradient(135deg, #A3B899 0%, #8FA085 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 3px 10px rgba(163, 184, 153, 0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            minWidth: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            fontFamily: "Arial, sans-serif"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-1px)";
            e.target.style.boxShadow = "0 5px 15px rgba(163, 184, 153, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 3px 10px rgba(163, 184, 153, 0.3)";
          }}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <span style={{
                width: "12px",
                height: "12px",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderTop: "2px solid white",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }}></span>
              {buttonLabel}
            </>
          ) : (
            <>
              <span style={{ fontSize: "16px" }}>🔗</span>
              {buttonLabel}
            </>
          )}
        </button>
        
        <p style={{
          fontSize: "12px",
          color: "#888",
          textAlign: "center",
          margin: "0",
          fontFamily: "Arial, sans-serif"
        }}>
          Usa Freighter, Lobstr u otra wallet compatible
        </p>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "8px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(163, 184, 153, 0.2)",
      minWidth: "200px"
    }}>
      {/* Wallet Info */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          backgroundColor: "rgba(163, 184, 153, 0.1)",
          borderRadius: "6px",
          border: "1px solid rgba(163, 184, 153, 0.2)"
        }}>
          <span style={{ fontSize: "14px" }}>💰</span>
          <Text 
            as="div" 
            size="sm" 
            style={{ 
              fontWeight: "600",
              color: "#5D5C61",
              fontFamily: "Arial, sans-serif"
            }}
          >
            Balance: {xlm} XLM
          </Text>
        </div>

        <div style={{
          opacity: balance.isLoading ? 0.6 : 1,
          transition: "opacity 0.3s ease"
        }}>
          <Profile
            publicAddress={address}
            size="sm"
            isShort
            onClick={() => setShowDisconnectModal(true)}
            style={{
              cursor: "pointer",
              transition: "transform 0.2s ease"
            }}
          />
        </div>
      </div>

      {/* Redirect to Dashboard Button */}
      <button
        onClick={() => window.location.href = "http://localhost:3000/dashboard"}
        style={{
          padding: "8px 16px",
          background: "linear-gradient(135deg, #A3B899 0%, #8FA085 100%)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 6px rgba(163, 184, 153, 0.3)",
          fontFamily: "Arial, sans-serif"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-1px)";
          e.target.style.boxShadow = "0 4px 10px rgba(163, 184, 153, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 2px 6px rgba(163, 184, 153, 0.3)";
        }}
      >
        <span style={{ fontSize: "12px", marginRight: "4px" }}>🚀</span>
        Ir al Dashboard
      </button>

      {/* Disconnect Button */}
      <button
        onClick={() => setShowDisconnectModal(true)}
        style={{
          padding: "6px 12px",
          background: "linear-gradient(135deg, #E88873 0%, #d67663 100%)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 6px rgba(232, 136, 115, 0.3)",
          fontFamily: "Arial, sans-serif"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-1px)";
          e.target.style.boxShadow = "0 4px 10px rgba(232, 136, 115, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 2px 6px rgba(232, 136, 115, 0.3)";
        }}
      >
        <span style={{ fontSize: "10px", marginRight: "4px" }}>🔓</span>
        Desconectar
      </button>

      {/* Modal */}
      <div id="modalContainer">
        <Modal
          visible={showDisconnectModal}
          onClose={() => setShowDisconnectModal(false)}
          parentId="modalContainer"
        >
          <div style={{
            padding: "20px",
            fontFamily: "Arial, sans-serif"
          }}>
            <Modal.Heading style={{
              color: "#5D5C61",
              marginBottom: "16px"
            }}>
              <span style={{ fontSize: "20px", marginRight: "8px" }}>🔗</span>
              Wallet Conectada
            </Modal.Heading>
            
            <div style={{
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              marginBottom: "20px"
            }}>
              <p style={{
                margin: "0 0 8px 0",
                fontSize: "14px",
                color: "#666"
              }}>
                Dirección conectada:
              </p>
              <code style={{ 
                lineBreak: "anywhere",
                backgroundColor: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                fontSize: "12px",
                color: "#5D5C61"
              }}>
                {address}
              </code>
            </div>

            <p style={{
              color: "#666",
              fontSize: "14px",
              textAlign: "center",
              margin: "0 0 20px 0"
            }}>
              ¿Deseas desconectar esta wallet?
            </p>

            <Modal.Footer itemAlignment="stack">
              <Button
                size="md"
                variant="primary"
                onClick={() => {
                  void disconnectWallet().then(() =>
                    setShowDisconnectModal(false),
                  );
                }}
                style={{
                  backgroundColor: "#E88873",
                  borderColor: "#E88873"
                }}
              >
                <span style={{ marginRight: "4px" }}>🔓</span>
                Desconectar
              </Button>
              <Button
                size="md"
                variant="tertiary"
                onClick={() => {
                  setShowDisconnectModal(false);
                }}
                style={{
                  color: "#5D5C61"
                }}
              >
                Cancelar
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};