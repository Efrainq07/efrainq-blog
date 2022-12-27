<script>
  import PostList from "./PostList.svelte";
  import NavbarFiller from "./NavbarFiller.svelte";
  import ConnectWalletButton from "./ConnectWalletButton.svelte";
  import { useNavigate } from "svelte-navigator";
  import { web3Info } from "./js/Web3Info";
  import { getLensPostTitles } from "./js/LensQueries";
  import Spinner from "./Spinner.svelte";

  let titles;
  let pageInfo;
  let loading = true;
  getLensPostTitles().then((result) => {
    loading = false;
    titles = result.title_data;
    pageInfo = result.pageInfo;
  });
  const navigate = useNavigate();
</script>

<NavbarFiller />
<div id="content-container">
  <div class="left-col">
    <h2>Welcome to my blog.</h2>
    <p class="blog-desc">
      Here you can read some articles I write on things I am working on or
      reading about. This can go from AI, Blockchain, Physics and Mathematics,
      to History, Philosophy and pretty much anything I find interesting.
    </p>
    <p class="blog-desc">
      This blog's backend was made entirely using <a
        class="lens-anchor"
        rel="noreferrer" target="_blank"
        href="https://www.lens.xyz/">Lens Protocol</a
      >, a decentralized social graph stored in the
      <a class="polygon-anchor"  rel="noreferrer" target="_blank" href="https://polygon.technology/"
        >Polygon Chain</a
      >
      and the
      <a class="ipfs-anchor" rel="noreferrer" target="_blank" href="https://ipfs.tech/">IPFS Network</a>.
    </p>
    {#if loading}
      <div class="spinner-container">
        <Spinner />
      </div>
    {:else}
      <PostList list={titles} />
    {/if}
  </div>
  <div id="sidebar">
    <ConnectWalletButton />
    {#if $web3Info.logged && $web3Info.lensProfileData.handle == "nanquiedo.lens"}
      <button
        id="new-post-btn"
        on:click={() => {
          navigate("/newpost");
        }}>New Post</button
      >
    {/if}
  </div>
</div>

<style>
  .ipfs-anchor,
  .ipfs-anchor:hover {
    animation: none;
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgb(107, 196, 206);
    font-weight: 500;
  }
  .polygon-anchor,
  .polygon-anchor:hover {
    animation: none;
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgb(123, 63, 228);
    font-weight: 500;
  }
  .lens-anchor,
  .lens-anchor:hover {
    animation: none;
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgb(0, 80, 30);
    font-weight: 500;
  }
  .lens-anchor:hover {
    color: rgb(171, 254, 44);
  }
  .blog-desc {
    width: 70%;
    text-align: justify;
  }
  .left-col {
    display: flex;
    flex-direction: column;
  }
  .spinner-container {
    display: grid;
    width: 70%;
    place-items: center;
  }
  #new-post-btn {
    margin: 2vw;
    height: 5vh;
    width: 10vw;
    justify-self: center;
  }
  #content-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 70% 30%;
    columns: 2;
    margin-left: 5vw;
  }
  #sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
