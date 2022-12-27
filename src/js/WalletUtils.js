import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
import Web3Modal from 'web3modal/dist/index.js';

const Web3 = window.Web3

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, 
      options: {
        rpc: {
          137: "https://polygon.llamarpc.com"
          },
      }
    }
  };

const web3modal = new Web3Modal(
    {
        network : "polygon",
        theme : "light",
        cacheProvider : true,
        providerOptions
    } 
);

export const handleConnectWallet = async function connectWallet() {
    var provider = await web3modal.connect()
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x89" }]
    });

    await provider.enable();
    var web3 = new Web3(provider)
    const acc = await web3.eth.getAccounts(); 
    return {
        account: acc[0],
        web3: web3,
        web3modal: web3modal
    }
};