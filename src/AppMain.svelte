<script>
  import TopMenu from './components/TopMenu/TopMenu.svelte';
  import TabPage from './components/TabPage/TabPage.svelte';
  import {activeMenu, isMenuShow, showMenu, closeMenu} from './stores/menu';
  import UsersPage from './pages/Users.svelte';

  function onkeypress(e) {
    if(e.key === '/' || e.key === '?') {
      if($isMenuShow){
        closeMenu();
      } else {
        showMenu();
      }
    }
  }
</script>

<style>
  main {
    padding: 1.5rem 3.5rem;
  }
</style>

<svelte:body on:keypress={onkeypress} />
<main>
  <TopMenu />
  <TabPage>
    {#if $activeMenu.code === 'dashboard'}
      <h1> Halaman Dashboard </h1>
    {:else if $activeMenu.code === 'users'}
      <UsersPage />
    {:else}
      <h1>Halaman tidak terdaftar</h1>
    {/if}
  </TabPage>
</main>
