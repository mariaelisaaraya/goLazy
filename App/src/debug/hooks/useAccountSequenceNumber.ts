/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { MuxedAccount, StrKey } from "@stellar/stellar-sdk";
import { useQuery } from "@tanstack/react-query";
import { NetworkHeaders } from "../types/types";

export const useAccountSequenceNumber = ({
  publicKey,
  horizonUrl,
  headers,
  uniqueId,
  enabled = false,
}: {
  publicKey: string;
  horizonUrl: string;
  headers: NetworkHeaders;
  uniqueId?: string;
  enabled?: boolean;
}) => {
  const query = useQuery({
    queryKey: ["accountSequenceNumber", { publicKey, uniqueId }],
    queryFn: async () => {
      let sourceAccount = publicKey;

      if (StrKey.isValidMed25519PublicKey(publicKey)) {
        const muxedAccount = MuxedAccount.fromAddress(publicKey, "0");
        sourceAccount = muxedAccount.baseAccount().accountId();
      }

      try {
        const response = await fetch(
          `${horizonUrl}/accounts/${sourceAccount}`,
          { headers },
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const responseJson = await response.json();

        if (responseJson?.status === 0) {
          throw `Unable to reach server at ${horizonUrl}.`;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (responseJson?.status?.toString()?.startsWith("4")) {
          if (responseJson?.title === "Resource Missing") {
            throw "Account not found. Make sure the correct network is selected and the account is funded/created.";
          }

          throw (
            responseJson?.extras?.reason ||
            responseJson?.detail ||
            "Something went wrong when fetching the transaction sequence number. Please try again."
          );
        }

        return (BigInt(responseJson.sequence) + BigInt(1)).toString();
      } catch (e: unknown) {
        throw `${e as Error}. Check network configuration.`;
      }
    },
    enabled,
  });

  return query;
};
