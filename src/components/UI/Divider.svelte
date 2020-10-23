<script>
  export let type = 'solid';
</script>
<style>
/* Dashed border */
hr {
  margin-bottom: 1rem;
}
.dashed {
  border-top: 1px dashed #bbb;
}

/* Dotted border */
.dotted {
  border-top: 1px dotted #bbb;
}

/* Solid border */
.solid {
  border-top: 1px solid #bbb;
}
</style>

<hr class="{type}"/>
