<script>
  import { link } from "svelte-navigator";
</script>

<div id="navbar">
  <div id="navbar-bg" />
  <div id="navbar-bg-image" />
  <a href="/" id="homepage-link">Efrain Quintero</a>
  <div id="navbar-links">
    <a class="navbar-link" use:link href="/info">Info</a>
    <a class="navbar-link" use:link href="/blog">Blog</a>
    <a class="navbar-link" use:link href="/contact">Contact</a>
  </div>
</div>

<style>
  #navbar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 0;
    align-items: center;
    top: 0;
    width: 100%;
    height: 10vh;
  }
  #navbar-bg,#navbar-bg-image{
    background-color: #c2c2c2;

    position: absolute;
    height: 100%;
    width: 100%;
  }
  #navbar-bg-image{
    background-image: url("../gameoflife.gif");
    opacity: 0.2
  }
  #homepage-link,
  #homepage-link:hover {
    position: relative;
    text-decoration: none;
    margin: 2vw;
    padding: 1vh;
    font-weight: 100;
    font-size: 150%;
    color: #000000;
  }
  #navbar-links {
    position: relative;
    margin-right: 2vw;
  }
  .navbar-link,
  .navbar-link:hover {
    font-weight: 100;
    font-size: 120%;
    padding: 1vw;
  }
  .navbar-link:hover {
    text-decoration: none;
    opacity: 50%;
    transition: 0.2s;
  }
</style>
