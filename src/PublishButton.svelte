<script>
  export let handleClick = ()=>{};
</script>

<button class="button-28" on:click={handleClick}>
    <slot></slot>
</button>

<style>
.button-28 {
  background-color: transparent;
  border: 2px solid #2196f3;
  border-radius: 15px;
  box-sizing: border-box;
  color: #2196f3;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 1vh 1vw;
  min-height: 6vh;
  min-width: 0;
  outline: none;
  text-align: center;
  width: 10vw;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}
@media (max-width: 640px) {
  .button-28{
   width: 20vw;
  }
}

.button-28:disabled {
  pointer-events: none;
}

.button-28:hover {
  color: #fff;
  background-color: #2196f3;
  border-color: #1796ff;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>