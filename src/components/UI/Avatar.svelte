<script>
  export let src = "";
  export let alt = "avatar";
  export let size= 32;
</script>

<style>
  img {
    border-radius: 50%;
  }
</style>

<img style="height: {size}px; width: {size}px" {src} {alt} />
