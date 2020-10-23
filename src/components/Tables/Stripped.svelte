<script>
  import {createEventDispatcher} from 'svelte';

  export let headers = ["#"]
  export let rows = [];

  const dispatch = createEventDispatcher();

  const onClick = (data) => {
    dispatch('rowclick', data);
  }
</script>

<table>
  <tr>
    {#each headers as header (header)}
      <th>{header}</th>
    {/each}
  </tr>
  {#if rows.length > 0}
    {#each rows as row (row[0])}
      <tr on:click={() => onClick(row)}>
        {#each row as col, i (i+col)}
          <td>{col}</td>
        {/each}
      </tr>
    {/each}
  {:else}
    <tr>
      <h1>Data Kosong</h1>
    </tr>
  {/if}
</table>

<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  overflow-x: auto;
}

th, td {
  text-align: left;
  padding: 16px;
}

td {
  font-size: 1.4rem;
}

th {
  font-size: 1.6rem;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
