<script lang="ts">
    import { Route } from "svelte-router-spa";

    import type { CurrentRoute } from "../../core";
    
    export let currentRoute: CurrentRoute;

</script>

<div class="content">
    <div class="content-body">
        <Route {currentRoute}></Route>
    </div>
</div>

<style>
    .content {
        flex-grow: 1;
        height: 100%;
        overflow: hidden;
        background-color: var(--surface);
        justify-content: center;
        display: flex;
    }
    .content-body {
        background-color: rgba(0, 0, 0, 0.05);
        width: 80%;
        justify-content: center;
        display: flex;
    }
</style>