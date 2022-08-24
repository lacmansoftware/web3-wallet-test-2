import { InjectedConnector } from "@web3-react/injected-connector";

import { WalletLinkConnector } from "@web3-react/walletlink-connector";

import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,

  appName: "Web3-react Demo",

  supportedChainIds: [1, 3, 4, 5, 42],
});

export const WalletConnect = new WalletConnectConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
