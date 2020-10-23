<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const onrefresh = () => {
    dispatch('refresh')
  }

</script>

<style>
  div {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px
  }

  img {
    margin-right: 5px;
  }

  i {
    cursor: pointer;
  }
</style>

<div>
  <img alt="captcha" src="https://login.angondata.net/pdambatola/securimage_show/render/?sid=a50fd13" />
  <i class="material-icons" on:click={onrefresh}>refresh</i>
</div>
