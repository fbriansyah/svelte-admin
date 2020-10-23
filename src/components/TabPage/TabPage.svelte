<script>
  import {
    listmenu,
    activeMenu,
    setActiveMenu,
    toggleMenu,
  } from '../../stores/menu';
  $: tabmenus = $listmenu.filter(menu => menu.isActive);

  function handleRightClick(event, menu) {
    if (event.which == 3) {
      toggleMenu(menu);
    }
  }
</script>

<style>
/* Style the tab */
div {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  margin-top: 2rem;
}

/* Style the buttons that are used to open the tab content */
button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
button.active {
  background-color: #337ab7;
  color: #fff;
}

/* Style the tab content */
section {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  min-height: 30rem;
  overflow-x: auto;
  background-color: #fff;
}
</style>

<div on:contextmenu|preventDefault|stopPropagation={()=>({})}>
  {#each tabmenus as menu (menu.code)}
    <button
      on:mousedown={event => handleRightClick(event, menu)}
      on:click={() => setActiveMenu(menu)}
      on:contextmenu|preventDefault|stopPropagation={()=>({})}
      class:active={menu.code === $activeMenu.code}>
      {menu.nama}
    </button>
  {/each}
</div>

<section>
  <slot></slot>
</section>
