<script lang="ts">
  import { Router } from "svelte-navigator";
  import Sidebar from "./layout/sidebar/sidebar.svelte";
  import Content from "./layout/content/content.svelte";
</script>

<main class="main">
  <Router>
    <Sidebar />
    <Content />
  </Router>
</main>

<style>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
