<main>
  <div class="background" />
  <div class="container">
    <h1>My name is Efrain</h1>
    <p>I'm a software engineer and mathematician.</p>
  </div>
</main>

<style>
  main {
    display: grid;
    place-items: center;
    height: 100%;
    margin: 0;
  }
  .background {
    background-image: url("../gameoflife.gif");
    position: absolute;
    z-index: -1;
    opacity: 0.2;
    height: 100%;
    width: 100%;
  }
  .container {
    text-align: center;
    opacity: 1;
  }
  h1 {
    font-size: 4em;
    font-weight: 200;
    margin: 10px 0;
  }
  p {
    font-size: 1.2em;
  }
</style>
