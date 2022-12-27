<script>
  import { Link } from "svelte-navigator";
  export let list = [
    { title: "Title 1", id: "1" },
    {
      title: "Title 2",
      id: "2",
    },
    {
      title: "Title 3",
      id: "3",
    },
  ];
</script>

<div class="list-container">
  {#each list as post}
    <Link to={`/blog/${post.id}`}>{post.title}</Link>
  {/each}
</div>

<style>
  .list-container {
    display: grid;
    width: 70%;
    place-items: center;
  }
</style>
