<script>
  import {createEventDispatcher} from 'svelte';

  export let name = 'input';
  export let value = '';
  export let label = '';
  export let placeholder = 'Pilih salah satu';
  export let type = 'text';
  export let focus = false;
  export let options = [];

  const dispatch = createEventDispatcher();

  function onSelect(value) {
    dispatch('select', {
      field: name,
      value: value,
    })
    /* console.log('select', value) */
  }

  function onInput(e) {
    const value = e.target.value.toLowerCase();
    onSelect(value);
  }
</script>

<div class="form__group field">
  <input {type} {name} {focus}
    id="{name}" {placeholder} {value}
    on:focus={() => onSelect('')}
    on:input={onInput}
    list="{name+'_list'}"
    class="form__field">
  <label for="{name}" class="form__label">{label}</label>
  <datalist id="{name+'_list'}">
    {#each options as opt (opt.value)}
      <option data-value={opt.value}>{opt.name}</option>
    {/each}
  </datalist>
</div>

<style lang="scss">
  $primary: #004ba0;
  $secondary: #63a4ff;
  $white: #fff;
  $gray: #9b9b9b;
  .form__group {
    position: relative;
    padding: 15px 0 0;
    width: 100%;
    margin-bottom: 1rem;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.6rem;
    color: #333;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary,$secondary);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }
</style>
