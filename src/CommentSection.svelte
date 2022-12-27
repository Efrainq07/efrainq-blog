<script>
  import {getLensCommentContent} from './js/LensQueries'
  import { resolveIPFS } from "./js/ResolveIPFS";
  import Spinner from './Spinner.svelte';
  export let id;
  let content
  let loading = true;
  getLensCommentContent(id).then((result) => {
      loading = false;
      content = result;
    });
</script>

<div class="comment-section-container">
    <div class="comment-section-desc comment-section">Comments</div>
    {#if loading}
    <Spinner/>
    {:else}
    {#each content as comment }
    <div class="comment-section comment">
      <div class="comment-author-info">
        <div class="image-cropper">
          <img
            class="lens-prof-pic"
            src={resolveIPFS(comment.profile.pfp_url)}
            alt="lens profile pic"
          />
        </div>
        <div class="comment-author">{comment.profile.handle}</div>
      </div>
        <div class="comment-content">{comment.content}</div>
    </div>
    {/each}
    {/if}
</div>

<style>

  .lens-prof-pic {
    height: 4vh;
  }
  .comment-author-info{
    display: flex;
    margin-left: 1vw;
    margin-bottom: 1vh;
  }
  .image-cropper {
    width: 4vh;
    height: 4vh;
    position: relative;
    border-radius: 2vh;
    overflow: hidden;
    margin-right: 0.5vw;
  }
  .comment-section{
    width: 80%;
    margin-left: 3vw;
    margin-top: 0.7vh;
    margin-bottom: 0.7vh;
  }
  .comment-section-desc{
    font-weight: 600;
    font-size: 1.2em;
    padding-top: 1vh;
    padding-bottom: 1vh;
  }
  .comment-section-container {
    display: grid;
    width: 100%;
    place-items: center;
    padding-bottom: 5vh;
  }
  @media (min-width: 800px) {
    .comment-section {
      width: 50vw;
    }
  }
  .comment{
    border-left: 2px dotted;
    padding-bottom: 2vh;
  }
  .comment-author{
    font-weight: 600;
    font-size: 1.1em;
  }
  .comment-content{
    margin-left: 2vw;
  }
</style>
