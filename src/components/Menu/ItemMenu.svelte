<script>
  import Typography from '../UI/Typography.svelte';

  export let isActive = false;
</script>

<style>
  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  i {
    font-size: 2rem;
    color: #8bc34a;
    margin-left: auto;
  }
</style>

<div on:click>
  <Typography>
    <slot />
  </Typography>
  {#if isActive}
   <i class="material-icons">done</i>
  {/if}
</div>
