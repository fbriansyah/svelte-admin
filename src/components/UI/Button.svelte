<script>
  export let text = "Button";
  export let type = "button";
  export let color = "primary";
</script>
<style>
button {
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  border-radius: 3px;
  border: none;
}

.primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
button.primary:hover {
  background-color: #2e6da4;
}

.secondary {
  color: #fff;
  background-color: #d81b60;
  border-color: #a00037;
}

.secondary:hover {
  background-color: #a00037;
}
</style>

<button on:click {type} class={color}>{text}</button>
