<script>
  import SocialIcons from "@rodneylab/svelte-social-icons";
  import NavbarFiller from "./NavbarFiller.svelte";
</script>

<main>
  <div id="info-container">
    <div id="description">
      <h3>
        You can contact me if you have any ideas, proposals, or just want to
        talk about something interesting.
      </h3>
      <div class="contact-links">
        <a href="https://www.github.com/Efrainq07" rel="noreferrer" target="_blank" class="social-link">
          <SocialIcons network="github" height="50" width="50" alt=""  fgColor="rgb(150,150,150)" bgColor="#fff" /> Efrainq07</a
        >
        <a href="https://www.instagram.com/nanquiedo/" rel="noreferrer" target="_blank" class="social-link">
            <SocialIcons network="instagram" height="50" width="50" alt=""  fgColor="rgb(150,150,150)" bgColor="#fff" />nanquiedo</a
          >
          <a href="https://twitter.com/nanquiedo"  rel="noreferrer" target="_blank" class="social-link">
            <SocialIcons network="twitter" height="50" width="50" alt=""  fgColor="rgb(150,150,150)" bgColor="#fff" />nanquiedo</a
          >
          <a href="mail://efrainq07@gmail.com"  rel="noreferrer" target="_blank" class="social-link">
            <SocialIcons network="email" height="50" width="50" alt=""  fgColor="rgb(150,150,150)" bgColor="#fff" />efrainq07@gmail.com</a
          >
          <a href="https://www.lensfrens.xyz/nanquiedo.lens" rel="noreferrer"  target="_blank" class="social-link">
            <img height="25" width="25" class="lens-logo" src="/lens-grey.png" alt="Lens Logo" /><span>nanquiedo.lens</span></a
          >
      </div>
    </div>
  </div>
</main>

<style>
  .lens-logo{
    padding: 12.5px;
  }
.social-link{
    display: flex;
    align-items: center;
}
.contact-links{
    display: flex;
    justify-items: center;
    flex-wrap: wrap;
    max-width: 30vw;
    min-width: 200px;
}
  .contact-links a,
  .contact-links a:hover {
    font-size: 1em;
    color: black;
  }
  main {
    display: grid;
    place-items: center;
    height: 100%;
    margin: 0;
  }
  #info-container {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  #description {
    margin: 5vw;
    margin-top: 0;
    max-width: 30vw;
    min-width: 200px;
  }
  #description h3 {
    text-align: justify;
  }
  #description p {
    text-align: justify;
  }
</style>
