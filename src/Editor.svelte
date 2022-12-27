<script>
  import marked from "../scripts/marked-with-image-size";
  import {uploadIPFSFormData} from './js/UploadIPFSFormData'

  let textarea_object;
  export let source = `
# H1 heading

## H2 heading

### H3 heading
`;
  $: markdown = marked.parse(source);

  const dropHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const pasteHandler = async (event) => {
    const imageFile = await event.clipboardData.files[0];
    if (imageFile) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("file", imageFile);
      const ipfsCID = await uploadIPFSFormData(formData);
      const position = textarea_object.selectionStart;
      source =
        source.substring(0, position) +
        `![${imageFile.name}](${ipfsCID})` +
        source.substring(position);
    }
  };
</script>

<main class="container">
  <div class="markdown-editor">
    <div class="left-panel">
      <textarea
        bind:this={textarea_object}
        bind:value={source}
        on:drop={dropHandler}
        on:dragstart={(e) => {
          event.dataTransfer.effectAllowed = "all";
        }}
        on:paste={pasteHandler}
        class="source"
      />
    </div>
    <div class="right-panel">
      <div class="output">{@html markdown}</div>
    </div>
  </div>
</main>

<style>
  .container {
    background: #ebebeb;
    display: grid;
    place-items: center;
    padding: 0;
    width: 100%;
    height: 72vh;
  }
  .markdown-editor {
    width: 100%;
    height: 65vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .left-panel,
  .right-panel {
    width: 49%;
    height: 100%;
    border: solid 1px black;
    background: #ffffff;
  }
  .right-panel {
    overflow: auto;
  }
  @media (max-width: 800px) {
    .right-panel {
      display: none;
    }
    .left-panel {
      width: 80%;
    }
  }
  .source {
    border: none;
    width: 100%;
    height: 100%;
    background: #001628;
    color: #83ba52;
  }
  .source:focus {
    outline: none;
  }
  .output {
    padding: 0 2em;
  }
</style>
