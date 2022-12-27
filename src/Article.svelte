<script>
  import marked from "../scripts/marked-with-image-size";
  import NavbarFiller from "./NavbarFiller.svelte";
  import Spinner from "./Spinner.svelte";
  import NewComment from "./NewComment.svelte";
  import { getLensPostContent } from "./js/LensQueries";
  import CommentSection from "./CommentSection.svelte";
  export let id;
  export let binded_source = false;
  export let singlePage = true;
  export let title = "";
  export let source = `# H1 heading`;
  let loading = true;
  if (!binded_source) {
    getLensPostContent(id).then((result) => {
      loading = false;
      title = result.name;
      source = result.content;
    });
  } else {
    loading = false;
  }
  let markdown;
  $: markdown = marked.parse(source);
</script>

{#if singlePage}
  <NavbarFiller />
{/if}
<div class="post-container">
  {#if loading}
    <Spinner />
  {:else}
    <div class="post">
      <h1 id="post-title">{title}</h1>
      {@html markdown}
    </div>
  {/if}
</div>
{#if singlePage}
  <NewComment id={id} title={title}/>
  <CommentSection id={id}/>
{/if}
<style>
  #post-title{
    color: rgb(110, 110, 110);
    font-size: 2.5rem;
  }
  .post{
    margin-top: 5vh;
    margin-left: 3vw;
    width: 80%;
  }
 
  @media (min-width: 800px) {
    .post{
      width: 50vw;
    }
  }
  .post-container{
    display: grid;
    width: 100%;
    place-items: center;
  }
</style>
