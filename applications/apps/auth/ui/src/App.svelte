<script lang="ts">
  import { Router } from "svelte-router-spa";

  import type { Route } from "./core";
  import LoginContainer from "./layout/content/container/login.svelte";
  import StandardLayout from "./layout/standard-layout.svelte";

  const routes: Array<Route> = [
      {
        name: "/",
        component: StandardLayout
      },
      {
          name: "login",
          component: LoginContainer,
          layout: StandardLayout
      }
  ]

</script>

<main class="main">
  <Router {routes}>
  </Router>
</main>

<style>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
