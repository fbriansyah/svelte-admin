<script>
  import {createEventDispatcher} from 'svelte';
  import Input from '../UI/InputWithLabel.svelte';
  import Button from '../UI/Button.svelte';
  import Select2 from '../UI/SearchableSelect.svelte';

  export let editData = {
    nik: '',
    username: '',
    nama: '',
    umur: 0,
    role: ''
  }

  const roleOptions = [
    {name: 'Admin', value: 'admin'},
    {name: 'User', value: 'user'},
    {name: 'Treasury', value: 'treasury'}
  ]

  const dispatch = createEventDispatcher();
</script>

<div class="container">
  <form on:submit|preventDefault={() => dispatch('submit')}>
    <Input
      label="NIK User"
      name="nik"
      value="{editData.nik}"
      on:input
      placeholder="Masukkan nik"/>
    <Input
      label="Nama User"
      name="nama"
      on:input
      value="{editData.nama}"
      placeholder="Masukkan nama"/>
    <Input
      label="Umur User"
      name="umur"
      on:input
      value="{editData.umur}"
      placeholder="Masukkan Umur"/>
    <Select2
      label='Role User'
      name='role'
      on:select
      value="{editData.role}"
      options={roleOptions}
      placeholder="Pilih salah satu" />
  </form>
  <div class="button__group">
    <Button
      text="Cancel"
      on:click="{() => dispatch('cancel')}"
      color="secondary" />
    <Button
      text="Simpan"
      color="primary"
      type="submit"
      on:click="{() => dispatch('submit')}"
      />
  </div>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .container {
    width: 45rem;
    height: 100%;
    padding-left: 1rem;
  }

  .button__group {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
</style>
