<script>
  import {error} from '../../stores/auth';
</script>

<style>
  div {
    background-color: #f9f9f9;
    border-top: 1px solid #c0c0c0;
    width: 100%;
    height:45px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4 {
    color: red;
  }
</style>

<div>
  <h4>{$error}</h4>
</div>
