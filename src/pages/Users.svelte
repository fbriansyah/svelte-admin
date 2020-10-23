<script>
  import {fade} from 'svelte/transition';
  import Table from '../components/Tables/Stripped.svelte';
  import Typography from '../components/UI/Typography.svelte';
  import Divider from '../components/UI/Divider.svelte';
  import FormEditor from '../components/Forms/UserEditor.svelte';

  let editMode = false;
  let editData = {
    nik: '',
    username: '',
    nama: '',
    umur: 0,
    role: ''
  }

  const headers = ["NIK", "Username","Nama", "Umur", "Role"];
  const rows = [
    ["01234567", "john", "John Doe", "25", "Admin"],
    ["093123485", "admin", "Admin", 20, "Admin"],
    ["839182390", 'jane', "Jane Doe", 21, "Admin"],
    ["93182738", 'dane', "Dane Doo", 19, "Treasury"]
  ]

  const rowClickHandler = (data) => {
    editData = {
      nik: data.detail[0],
      username: data.detail[1],
      nama: data.detail[2],
      umur: data.detail[3],
      role: data.detail[4]
    }
    editMode = true;
  }
</script>

<section transition:fade>
  <Typography type="title">
    {editMode ? 'Edit User': 'Data Semua User'}
  </Typography>
  <Divider />
  {#if editMode}
    <FormEditor {editData} />
  {:else}
    <Table {headers} {rows} on:rowclick={rowClickHandler} />
  {/if}
</section>

<style>
  section {
    overflow-x: auto;
  }
</style>
