import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import { CoinbaseWallet, Injected } from "./utils/connector";
import CoinbaseButton from "./components/CoinbaseButton";
import WalletConnectButton from "./components/WalletConnectButton";
import InjectedButton from "./components/InjectedButton";

function App() {
  const { active, activate, library, chainId, account } = useWeb3React();
  const { isOpen, onOpen, onClose } = useDisclosure();
   return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <CoinbaseButton />
        <WalletConnectButton />
        <InjectedButton />
        {/* <button onClick={() => { activate(WalletConnect) }} /> */}
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
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
