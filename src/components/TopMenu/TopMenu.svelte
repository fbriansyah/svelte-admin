<script>
  import Button from '../UI/Button.svelte';
  import Typography from '../UI/Typography.svelte';
  import Avatar from '../UI/Avatar.svelte';
  import Modal from '../UI/Modal.svelte';
  import ListMenu from '../Menu/ListMenu.svelte';
  import {logout} from '../../stores/auth';
  import {isMenuShow, showMenu, closeMenu} from '../../stores/menu';

  /* let isShow = false; */

  function onclose() {
    closeMenu()
  }

  function onopen() {
    showMenu();
  }
</script>

<style>
  .top-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
  }

  div {
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }
</style>
<Modal
  title="Pilih menu yang akan ditampilkan"
  isShow={$isMenuShow}
  on:close={onclose} >
  <ListMenu />
</Modal>
<div class="top-menu">
  <Button text="Menu" color="secondary" on:click={onopen} />
  <div>
    <Typography>
      Selamat Datang <b>Admin</b>
    </Typography>
    <Avatar
      src="https://avatars.dicebear.com/api/male/johndoe.svg"
      alt="profile"/>
  </div>
  <Button text="Logout" on:click={logout} />
</div>
