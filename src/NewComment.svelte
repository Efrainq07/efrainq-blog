<script>
  import { uploadCommentMetadataToIPFS } from "./js/LensPostMetadataIPFS.js";
  import { web3Store, web3Info, web3modalStore } from "./js/Web3Info";
  import { handleConnectWallet } from "./js/WalletUtils";
  import { getLensContract } from "./js/LensContract";
  import Spinner from "./Spinner.svelte";
  import { onMount } from "svelte";
  import ConnectWalletButton from "./ConnectWalletButton.svelte";

  export let id, title;
  let loading = false;
  let content;
  const reactiveHandleConnectWallet = async () => {
    const result = await handleConnectWallet();
    web3Info.set({
      ...$web3Info,
      account: result.account,
    });
    web3Store.set(result.web3);
    web3modalStore.set(result.web3modal);
  };
  let LensContract = null;
  onMount(async () => {
    if ($web3Info.logged) {
      await reactiveHandleConnectWallet().then((res) => {
        LensContract = getLensContract($web3Store);
      });
    }
  });
  const [pub_author_id, pub_id] = id.split("-");
  const lensComment = async (ipfs_url) => {
    const commentData = [
      Number($web3Info.lensProfileData.id),
      ipfs_url,
      pub_author_id,
      pub_id,
      "0x00",
      "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
      "0x0000000000000000000000000000000000000000",
      "0x00",
    ];
    console.log(commentData);
    return await LensContract.methods
      .comment(commentData)
      .send({ from: $web3Info.account });
  };

  let commentStatus = null

  const postComment = async () => {
    loading = true;
    const ipfs_url = await uploadCommentMetadataToIPFS(title, content);
    await lensComment(ipfs_url)
      .then(() => {
        loading = false;
        commentStatus = 'success'
      })
      .catch((err) => {
        loading = false;
        commentStatus = 'failed'
      });
  };
</script>

<div class="new-comment-container">
  {#if !($web3Info.logged)}
  <div class="comment-textarea-desc">
    Connect your wallet and log in to Lens Protocol to post a comment.
  </div>
  <ConnectWalletButton/>
  {:else}
  <div class="comment-textarea-desc">Post a comment</div>
  <textarea class="comment-textarea" bind:value={content} />
  <div class="submit-btn-container">
    {#if loading}
      <Spinner />
    {:else}
      <button class="submit-btn" on:click={postComment}>Submit</button>
      {#if commentStatus === 'success'}
      <span class="submit-result-success"> Transaction successful! Reload to see your comment.</span>
      {:else if commentStatus === 'failed'}
      <span class="submit-result-failed"> Transaction failed! Try again.</span>
      {/if}
    {/if}
  </div>
  {/if}
</div>

<style>
  .submit-result-success{
    color: rgb(0, 255, 0);
  }
  .submit-result-failed{
    color: rgb(255, 0, 0);
  }
  .submit-btn {
    border-radius: 5px;
    background-color: #2196f3;
    color: #fff;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    margin-bottom: 4vh;
  }
  .submit-btn:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  .submit-btn-container {
    margin-left: 3vw;
    width: 80%;
  }
  .comment-textarea-desc {
    font-weight: 600;
    font-size: 1.2em;
    border-top: dotted 1px gray;
    padding-top: 1vh;
  }
  .comment-textarea,
  .comment-textarea-desc {
    width: 80%;
    margin-left: 3vw;
    margin-top: 1vh;
    margin-bottom: 2vh;
  }
  .comment-textarea {
    height: 15vh;
  }
  @media (min-width: 800px) {
    .comment-textarea,
    .comment-textarea-desc,
    .submit-btn-container {
      width: 50vw;
    }
  }
  .new-comment-container {
    display: grid;
    width: 100%;
    place-items: center;
  }
  .new-comment-container {
    margin-top: 1vh;
  }
</style>
