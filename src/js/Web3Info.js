import { writable } from "svelte/store";

//localStorage.setItem("web3Info",  `{"account":null,"lensTokens":null,"lensProfileData":null,"logged":false}`)


export const web3Info = writable(JSON.parse(localStorage.getItem("web3Info")) || {
    account: null,
    lensTokens: null,
    lensProfileData: null,
    logged: false,
  });

export const web3Store = writable(null);
export const web3modalStore = writable(null);

web3Info.subscribe(val => localStorage.setItem("web3Info",  JSON.stringify(val)));


export const lensModal = writable(null);
