<script>
  import {createEventDispatcher} from 'svelte';
  import Typography from './Typography.svelte';
  import Backdrop from './Backdrop.svelte';
  import Divider from './Divider.svelte';
  import {fade} from 'svelte/transition';

  export let isShow = false;
  export let title = 'Title';

  const dispatch = createEventDispatcher();
  function closeModal() {
    dispatch('close');
  }
</script>

<style>
/* The Modal (background) */

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
  margin-top: 10rem;
}

/* Modal Content */
.modal-container {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 45rem;
  z-index: 10;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

{#if isShow}
  <div transition:fade>
    <Backdrop on:click={closeModal} />
    <div class="modal">
      <!-- Modal content -->
      <div class="modal-container">
        <div class="modal-header">
          <Typography type="title">{title}</Typography>
          <span class="close" on:click={closeModal}>&times;</span>
        </div>
        <Divider />
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
{/if}
