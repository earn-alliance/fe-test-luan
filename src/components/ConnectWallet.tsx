import { useState } from "react";
import { useSyncProviders } from "../hooks/useSyncProviders";
import { EIP6963ProviderDetail } from "web3";

export const ConnectWallet = () => {
  const [userAccount, setUserAccount] = useState<string>("");
  const providers = useSyncProviders();

  const [errorMessage, setErrorMessage] = useState("");
  const clearError = () => setErrorMessage("");
  const setError = (error: string) => setErrorMessage(error);
  const isError = !!errorMessage;

  const formatAddress = (addr: string) => {
    const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2);
    return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`;
  };

  const handleConnectWallet = async (
    providerWithInfo: EIP6963ProviderDetail,
  ) => {
    try {
      const accounts = (await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      })) as string[];

      setUserAccount(accounts?.[0]);
    } catch (error) {
      setError(`Code: ${error} \nError Message: ${error}`);
    }
  };
  return (
    <div className="flex items-center">
      <div className="p-2 border border-custom-yellow rounded-md bg-custom-gray hover:bg-custom-yellow transition duration-300 hover:text-gray-800">
        {userAccount ? (
          <div className="selectedWallet">
            <div>({formatAddress(userAccount)})</div>
          </div>
        ) : (
          <>
            {providers?.map((provider: EIP6963ProviderDetail) => (
              <button
                key={provider.info.uuid}
                onClick={() => handleConnectWallet(provider)}
              >
                Connect Wallet
              </button>
            ))}
          </>
        )}
      </div>
      <div
        className="mmError"
        style={isError ? { backgroundColor: "brown" } : {}}
      >
        {isError && (
          <div onClick={clearError}>
            <strong>Error:</strong> {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};
