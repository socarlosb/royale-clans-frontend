<script>
  export let max;
  export let value;
</script>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: var(--black);
    border-radius: 5px;
  }

  .text {
    text-align: center;
    position: fixed;
    bottom: 0;
    z-index: 1;
    font-size: 1.4em;
    bottom: 14px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .progress {
    display: block;
    height: 88%;
    position: relative;
    overflow: hidden;
    background-color: var(--blue);
    border-radius: 5px;
  }
</style>

<footer>
  <span class="text">{((value / max) * 100).toFixed(0) || 0}%</span>
  <span class="progress" style="width: {((value / max) * 100).toFixed(0)}%" />
</footer>
