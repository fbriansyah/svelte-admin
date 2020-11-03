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
    ["01234567", "john", "John Doe", "25", "admin"],
    ["093123485", "admin", "Admin", 20, "admin"],
    ["839182390", 'jane', "Jane Doe", 21, "admin"],
    ["93182738", 'dane', "Dane Doo", 19, "treasury"]
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

  const setEditData = (field, value) => {
    editData = {
      ...editData,
      [field]: value
    }
  }

  const oncancel = () => editMode = false;
  const onInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    setEditData(field, value);
  }
  const onSelect = e => {
    const data = e.detail;
    setEditData(data.field, data.value);
  }
  const onSubmit = () => {
    console.log(editData);
  }
</script>

<section transition:fade>
  <Typography type="title">
    {editMode ? 'Edit User': 'Data Semua User'}
  </Typography>
  <Divider />
  {#if editMode}
    <FormEditor
      {editData}
      on:select="{onSelect}"
      on:input="{onInput}"
      on:submit="{onSubmit}"
      on:cancel={oncancel}/>
  {:else}
    <Table {headers} {rows} on:rowclick={rowClickHandler} />
  {/if}
</section>

<style>
  section {
    overflow-x: auto;
  }
</style>
