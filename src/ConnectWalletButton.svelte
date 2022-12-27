<script>
  import { handleConnectWallet } from "./js/WalletUtils";
  import Modal from "svelte-simple-modal";
  import LensSignature from "./LensSignature.svelte";
  import { web3Info, web3Store, web3modalStore } from "./js/Web3Info";
  import { lensModal } from "./js/Web3Info";
  import { resolveIPFS } from "./js/ResolveIPFS";

  const showLensModal = () => lensModal.set(LensSignature);

  const reactiveHandleConnectWallet = async () => {
    const result = await handleConnectWallet();
    web3Info.set({
      ...$web3Info,
      account: result.account,
    });
    web3Store.set(result.web3);
    web3modalStore.set(result.web3modal);
    showLensModal();
  };

  const reactiveHandleDisconnectWallet = async () => {
    web3Info.set({
      account: null,
      lensTokens: null,
      lensProfileData: null,
      logged: false,
    });
    $web3modalStore.clearCachedProvider();
  };
</script>

<Modal show={$lensModal} on:close={()=>{lensModal.set(null)}}>
  {#if $web3Info.logged}
    <button id="disconnect-btn" on:click={reactiveHandleDisconnectWallet}>
      <div class="content">
        <div class="image-cropper">
          <img
            id="lens-prof-pic"
            src={resolveIPFS($web3Info.lensProfileData.picture.original.url)}
            alt="lens profile pic"
          />
        </div>
        {$web3Info.lensProfileData.handle}
      </div>
      <div class="content-hover">Disconnect</div>
    </button>
  {:else}
    <button id="wallet-btn" on:click={reactiveHandleConnectWallet}>
      Lens Login
    </button>
  {/if}
</Modal>

<style>
  #disconnect-btn .content-hover {
    display: none;
  }
  #disconnect-btn:hover .content {
    display: none;
  }
  #disconnect-btn .content {
    display: flex;
    align-items: center;
  }
  #disconnect-btn:hover .content-hover {
    display: flex;
  }
  #wallet-btn,
  #disconnect-btn {
    font-family: "Space Grotesk";
    border-radius: 30px;
    box-sizing: border-box;
    color: rgb(0, 80, 30);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-size: 1em;
    line-height: normal;
    margin: 1vh 0;
    min-height: 6vh;
    height: 6vh;
    text-align: center;
    min-width: 12vw;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    justify-self: center;
    touch-action: manipulation;
    will-change: transform;
    text-transform: uppercase;
    background-color: rgb(171, 254, 44);
    justify-content: center;
  }
  @media (max-width: 1000px) {
    #wallet-btn {
      height: 8vh;
      width: 15vh;
    }
  }

  #wallet-btn:disabled {
    pointer-events: none;
  }

  #wallet-btn:hover {
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  #wallet-btn:active {
    box-shadow: none;
    transform: translateY(0);
  }
  #disconnect-btn {
    text-transform: none;
  }
  #disconnect-btn:hover {
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    background-color: rgb(255, 85, 85);
  }

  #lens-prof-pic {
    height: 4vh;
  }
  .image-cropper {
    width: 4vh;
    height: 4vh;
    position: relative;
    border-radius: 2vh;
    overflow: hidden;
    margin-right: 0.5vw;
  }
</style>
