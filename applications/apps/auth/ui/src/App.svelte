<script lang="ts">
  import Sidebar from "./layout/sidebar/sidebar.svelte";
  import Content from "./layout/content/content.svelte";
  // import Counter from './lib/Counter.svelte'
</script>

<main class="main">
  <Sidebar />
  <Content />
</main>

<style>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
