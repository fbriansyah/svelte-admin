<script>
  export let icon = "face";
  export let placeholder = "";
  export let value = "";
  export let name = "";
  export let type = 'text';

  let isFocused = false;

  $: focusClassName = isFocused ? "control--focus" : "";

  const onfocus = () => (isFocused = true);
  const onblur = () => (isFocused = false);
</script>

<style>
  div {
    border: 1px solid #d9d9d9;
    border-left: 2px solid #4d7496;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 3px 5px;
    min-width: 200px;
    margin-bottom: 20px;
  }

  .control--focus {
    border: 1px solid #4d7496;
    border-left: 2px solid #4d7496;
  }

  i {
    font-size: 20px;
    margin-right: 5px;
  }

  input {
    border: none;
    width: 100%;
    color: #555555;
  }

  input:focus {
    outline: none;
  }
</style>

<div class="{focusClassName}">
  <i class="material-icons">{icon}</i>
  <input
    on:focus={onfocus}
    on:blur={onblur}
    {placeholder}
    on:input
    {value} 
    type={type}
    {name}/>
</div>
