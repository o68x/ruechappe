<script>
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div id="svelte" class="counter">
  <button on:click={subtract}>-</button>
  <pre>{ count }</pre>
  <button on:click={add}>+</button>
</div>

<style lang="scss">
button {
  font-size: 1em;
}

.counter {
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  font-family: var(--font-mono);
  font-size: 1rem;
  justify-content: center;
  padding: 2rem 1rem;

  pre {
    font-family: inherit;
    text-align: center;
    min-width: 3ch;
    margin: 0;
  }
}

</style>