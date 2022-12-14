import { Button, Box, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import "@fontsource/inter";
import {
  BinanceWallet,
  BitKeep,
  CoinbaseWallet,
  Injected,
  WalletConnect,
} from "./utils/connector";
import Layout from "./components/Layout";
import { Props } from "framer-motion/types/types";

const ConnectButton = ({ onClick, children }: Props) => {
  return (
    <>
      <Button
        width={300}
        onClick={onClick}
        bg="#24a0ed"
        color="white"
        fontSize="lg"
        fontWeight="medium"
        borderRadius="xl"
        border="1px solid transparent"
        _hover={{
          borderColor: "blue.700",
          color: "white",
        }}
        _active={{
          backgroundColor: "blue.800",
          borderColor: "blue.700",
        }}
        my="10"
        py="10"
      >
        {children}
      </Button>
    </>
  );
};

function App() {
  const { active, activate, deactivate, library, chainId, account } =
    useWeb3React();

  // const isBitKeepInstalled = window.isBitKeep && window.bitkeep.ethereum;
  return (
    <Layout>
      <ConnectButton
        onClick={() => {
          activate(CoinbaseWallet);
        }}
      >
        Coinbase Wallet
      </ConnectButton>
      <ConnectButton
        onClick={() => {
          activate(WalletConnect);
        }}
      >
        Wallet Connect
      </ConnectButton>
      <ConnectButton
        onClick={() => {
          activate(Injected);
        }}
      >
        Metamask
      </ConnectButton>
      <ConnectButton
        onClick={() => {
          activate(BitKeep);
        }}
      >
        BitKeep
      </ConnectButton>
      <ConnectButton
        onClick={() => {
          activate(BinanceWallet);
        }}
      >
        Binance Wallet
      </ConnectButton>

      <ConnectButton onClick={deactivate}>Disconnect</ConnectButton>

      <div>Connection Status: {active}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </Layout>
  );

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         activate(Injected);
  //       }}
  //     >
  //       Metamask
  //     </button>
  //     <button
  //       onClick={() => {
  //         activate(CoinbaseWallet);
  //       }}
  //     >
  //       Coinbase
  //     </button>
  //   </>
  // );
}

export default App;
