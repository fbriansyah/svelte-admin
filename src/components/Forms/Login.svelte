<script>
  import InputWithIcon from "../UI/InputWithIcon.svelte";
  import Button from "../UI/Button.svelte";
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let formState = {
    username: '',
    password: '',
  };

  function onsubmit() {
    dispatch('submit');
  }
</script>
<style>
	form {
		width: 27rem;
	}
</style>
<form on:submit|preventDefault={onsubmit}>
  <InputWithIcon
    placeholder="Username"
    name="username"
    icon="perm_identity"
    on:input
    value={formState.username} />
  <InputWithIcon
    placeholder="Password"
    name="password"
    icon="lock"
    type="password"
    on:input
    value={formState.password} />
  <Button text="Login" type="submit" on:click={onsubmit} />
</form>
