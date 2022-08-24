import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DAppProvider } from "@usedapp/core";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
