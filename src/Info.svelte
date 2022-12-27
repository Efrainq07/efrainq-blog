<main>
  <div id="info-container">
    <div class="image-cropper" />
    <div id="description">
        <h3>I'm a software engineer from Mexico.</h3>
        <p>I studied Mathematics at UNAM. I am interested in Quantum Computing, Blockchain Technologies and Artificial Intelligence.</p>
        <p>You can check out my latest CV <a class="cv-anchor" rel="noreferrer" target="_blank" href="/cv2022.pdf">here</a>.</p>
    </div>
  </div>
</main>

<style>
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
  .image-cropper {
    height: 20vw;
    width: 20vw;
    min-width: 200px;
    min-height: 200px;
    border-radius: 50%;
    background: url("../yo.jpg") 50% 5% no-repeat;
    background-size: 120%;
  }
  #description {
    margin: 5vw;
    margin-top: 0;
    max-width: 30vw;
    min-width: 200px;
  }
  #description h3{
    text-align: center;
  }
  #description p{
    text-align: justify;
  }
  .cv-anchor,.cv-anchor:hover{
    animation: none;
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgb(124, 124, 124);
    font-weight: 500;
  }
</style>
