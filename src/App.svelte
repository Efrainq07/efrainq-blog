<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./Home.svelte";
  import Navbar from "./Navbar.svelte";
  import Info from "./Info.svelte";
  import Blog from "./Blog.svelte";
  import Article from "./Article.svelte";
  import NewPost from "./NewPost.svelte";
  import Contact from './Contact.svelte';
</script>

<Router>
  <main>
    <Navbar />
    <Route path="/" primary={false} component={Home} />
    <Route path="/info" primary={false} component={Info} />
    <Route path="/blog/" primary={false} component={Blog} />
    <Route path="/blog/*id" primary={false} component={Article} />
    <Route path="/newpost" primary={false} component={NewPost} />
    <Route path="/contact" primary={false} component={Contact} />
  </main>
</Router>

<style>
  main {
    height: 100%;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
