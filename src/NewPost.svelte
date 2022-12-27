<script>
  import Article from "./Article.svelte";
  import Editor from "./Editor.svelte";
  import NavbarFiller from "./NavbarFiller.svelte";
  import Switch from "./Switch.svelte";
  import PublishButton from "./PublishButton.svelte";
  import { uploadPostMetadataToIPFS } from "./js/LensPostMetadataIPFS";
  import { getLensContract } from "./js/LensContract";
  import { web3Store, web3Info, web3modalStore } from "./js/Web3Info";
  import { handleConnectWallet } from "./js/WalletUtils";
  import Spinner from "./Spinner.svelte";
  import { onMount } from "svelte";
  import {newPostData} from './js/PostStore';
  let loading = false;
  let preview;
  let content = $newPostData.content;
  let title = $newPostData.title;
  $: {
    newPostData.set({
      title: title,
      content: content
    })
  }
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

  const lensPost = async (ipfs_url) => {
    const postData = [
      Number($web3Info.lensProfileData.id),
      ipfs_url,
      "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
      "0x0000000000000000000000000000000000000000",
      "0x00",
    ];
    console.log(postData);
    return await LensContract.methods
      .post(postData)
      .send({ from: $web3Info.account });
  };
</script>

<NavbarFiller />
<div id="newpost-title">Create a new blog post.</div>
<div>
  <div id="switch">
    {#if !preview}
      <div class="switch-label">Preview</div>
    {:else}
      <div class="switch-label" id="edit-label">Edit</div>
    {/if}
    <Switch bind:checked={preview} />
    {#if loading}
      <Spinner />
    {:else}
      <PublishButton
        handleClick={async () => {
          loading = true;
          const ipfs_url = await uploadPostMetadataToIPFS(title, content);
          await lensPost(ipfs_url).then(
            ()=>{
              loading = false;
            }
          ).catch(()=>{
            loading = false
          });
        }}>Publish</PublishButton
      >
    {/if}
  </div>
  {#if !preview}
    <div id="title-editor">
      <div id="title-editor-label">Title:</div>
      <textarea
        rows="1"
        wrap="nowrap"
        id="title-editor-textarea"
        bind:value={title}
      />
    </div>
  {/if}
</div>
{#if preview}
    <Article bind:source={content} singlePage={false} bind:title={title} binded_source={true}/>
{:else}
  <div id="newpost-container">
    <Editor bind:source={content} />
  </div>
{/if}

<style>
  #newpost-container {
    display: grid;
    place-items: center;
    width: 100%;
    margin: 0;
  }
  #newpost-title {
    text-align: center;
    width: 100%;
    font-size: 1.5em;
    padding: 2vh 0;
    font-weight: bold;
  }
  #switch {
    align-items: center;
    display: inline-flex;
    float: right;
    margin: 0 2vw;
  }
  .switch-label {
    font-size: 1.05em;
    padding: 2vh 1vw;
  }
  #edit-label {
    color: #2196f3;
  }
  #content-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 70% 20%;
    columns: 2;
    margin: 0 5vw 0 5vw;
  }
  #title-editor-textarea {
    white-space: nowrap;
    overflow: hidden;
    flex-grow: 1;
    font-size: 1.1em;
    margin: 1vh 0;
  }
  #title-editor {
    width: 35%;
    display: inline-flex;
    margin: 0 2vw;
    align-items: center;
  }
  #title-editor-label {
    margin: 1vh 1vw;
    font-size: 1.1em;
    font-weight: bold;
  }
  @media (max-width: 800px) {
    #title-editor {
      width: 70%;
    }
  }
</style>
