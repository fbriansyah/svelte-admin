<script>
  import {createEventDispatcher} from 'svelte';
  import Input from '../UI/InputWithLabel.svelte';
  import Button from '../UI/Button.svelte';

  export let editData = {
    nik: '',
    username: '',
    nama: '',
    umur: 0,
    role: ''
  }

  const dispatch = createEventDispatcher();
</script>

<form>
  <Input
    label="NIK User"
    name="nik"
    value="{editData.nik}"
    placeholder="Masukkan nik"/>
  <Input
    label="Nama User"
    name="nama"
    value="{editData.nama}"
    placeholder="Masukkan nama"/>
  <Input
    label="Umur User"
    name="umur"
    value="{editData.umur}"
    placeholder="Masukkan Umur"/>
  <Input
    label="Role User"
    name="role"
    value="{editData.role}"
    placeholder="Masukkan role"/>
  <div>
    <Button
      type="submit"
      text="Cancel"
      color="secondary" />
    <Button
      text="Simpan"
      color="primary"
      on:click="{() => dispatch('cancel')}"/>
  </div>
</form>

<style>
  form {
    width: 45rem;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }

  div {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
</style>
