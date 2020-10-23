<script>
  import Version from "./components/UI/Version.svelte";
  import LoginForm from './components/Forms/Login.svelte'
  import {login, isLogin} from './stores/auth';

  let formState = {
    username: "",
    password: "",
    captcha: ""
  };

  const oninput = event => {
    const name = event.target.name;
    const value = event.target.value;
    formState = {
      ...formState,
      [name]: value
    };
  };

  const onrefresh = () => {
    console.log("refresh captcha", $isLogin)
  }

  const onsubmit = () => {
    login(formState.username, formState.password);
  }
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35rem;
    background-color: #f9f9f9;
    padding-top: 1.8rem;
  }

  div {
    max-width: 350px;
    min-width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-top: 5px solid #4d7496;
  }

  h1 {
    font-size: 25px;
    font-weight: 300;
    margin: 1.5rem 0;
	}

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <div>
    <h1>App Title</h1>
    <LoginForm
      on:submit={onsubmit}
      on:input={oninput}
      formState={formState}
      on:refresh={onrefresh} />
    <Version />
  </div>
</main>
