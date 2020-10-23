<script>
  export let type = "body";
</script>

<style>
  .typography {
    font-weight: 300;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 400;
  }

  .subtitle {
    font-weight: 2.2rem;
  }

  .body {
    font-size: 1.6rem;
  }
</style>

<div class={["typography", type].join(" ")}>
  <slot />
</div>
