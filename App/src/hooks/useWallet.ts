import { useEffect, useState } from "react";
import type { ISupportedWallet } from "@creit.tech/stellar-wallets-kit";
import { kit } from "../config/wallet-kit";
import useGlobalAuthenticationStore from "../store/wallet";

export const useWallet = () => {
  const [isPending, setIsPending] = useState(false);
  const { address, isConnected } = useGlobalAuthenticationStore();

  useEffect(() => {
    // Intentar restaurar la conexión al cargar
    const restoreConnection = async () => {
      try {
        if (kit.getWallet()) {
          const { address } = await kit.getAddress();
          if (address && !isConnected) {
            useGlobalAuthenticationStore.getState().connectWalletStore(address);
          }
        }
      } catch (error) {
        console.error("Error restoring wallet connection:", error);
      }
    };

    restoreConnection();
  }, [isConnected]);

  return {
    address,
    isPending,
    isConnected,
  };
};

export const connectWallet = async () => {
  const { connectWalletStore } = useGlobalAuthenticationStore.getState();
  
  try {
    await kit.openModal({
      modalTitle: "Conecta tu wallet favorita",
      onWalletSelected: async (option: ISupportedWallet) => {
        kit.setWallet(option.id);
        const { address } = await kit.getAddress();
        connectWalletStore(address);
      },
    });
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
};

export const disconnectWallet = async () => {
  const { disconnectWalletStore } = useGlobalAuthenticationStore.getState();
  
  try {
    await kit.disconnect();
    disconnectWalletStore();
  } catch (error) {
    console.error("Error disconnecting wallet:", error);
  }
};