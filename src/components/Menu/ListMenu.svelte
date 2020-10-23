<script>
  import ItemMenu from './ItemMenu.svelte';
  import {listmenu, toggleMenu} from '../../stores/menu';
  import Input from '../UI/InputWithLabel.svelte';

  let filterValue = '';
  $: filteredMenu = $listmenu
    .filter(menu => menu.nama.toLowerCase().includes(filterValue));
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 2.5rem;
  }
</style>

<div>
  <Input
    label="Nama Menu"
    name="filter"
    placeholder="masukkan nama menu"
    value={filterValue}
    on:input="{(e) => filterValue = e.target.value.toLowerCase()}"/>
  {#each filteredMenu as menu (menu.code)}
    <ItemMenu on:click={() => toggleMenu(menu)} isActive={menu.isActive}>
      {menu.nama}
    </ItemMenu>
  {/each}
</div>
