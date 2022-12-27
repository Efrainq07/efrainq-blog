<script>
  import { handleLensAuth } from "./js/LensAuth";
  import {web3Info,lensModal} from './js/Web3Info';
  import {getLensProfileData} from './js/LensQueries'
  import LensHandleMissingModal from "./LensHandleMissingModal.svelte";
  
  const handleLensSignature = async () => {
    const lensResult = await handleLensAuth();
    const lensData = await getLensProfileData($web3Info.account)
    if(lensData){
    web3Info.set({
      ...$web3Info,
      lensTokens: lensResult,
      lensProfileData: lensData,
      logged: true
    });
    lensModal.set(null)
  }else{
    lensModal.set(LensHandleMissingModal)
  }
  };
</script>

<h2>Please sign the message.</h2>
<p>
  This blog uses this signature to verify with Lens Protocol that you're the
  owner of this address.
</p>
<button id="lens-sign" on:click={handleLensSignature}>
  <img height="20" width="20" src="/lens.png" alt="Lens Logo" />
  <div id="lens-sign-label">Sign-In with Lens</div>
</button>

<style>
  #lens-sign {
    display: flex;
    background-color: rgb(0, 80, 30);
    color: #fff;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    padding: 1vw;
  }
  #lens-sign:hover {
    color: rgb(171, 254, 44);
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  #lens-sign-label {
    margin-left: 0.5vw;
    font-family: "Space Grotesk";
    text-transform: uppercase;
  }
</style>
