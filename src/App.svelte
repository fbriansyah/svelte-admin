<script>
  import AppLogin from './AppLogin.svelte';
  import AppMain from './AppMain.svelte';
  import {isLogin} from './stores/auth';
  import {fade} from 'svelte/transition';
</script>

{#if !$isLogin}
  <div in:fade={{delay: 200}}>
    <AppLogin />
  </div>
{:else}
  <div in:fade={{delay: 200}}>
    <AppMain />
  </div>
{/if}
