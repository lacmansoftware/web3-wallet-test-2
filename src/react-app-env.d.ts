/// <reference types="react-scripts" />

declare module "@metamask/jazzicon" {
  export default function (diameter: number, seed: number): HTMLElement;
}

interface window {
  bitkeep: any;
}
let bitkeep = window.bitkeep;
