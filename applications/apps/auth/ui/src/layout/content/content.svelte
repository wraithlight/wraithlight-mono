<script lang="ts">
    import { Route } from "svelte-navigator";
    import LoginContainer from "./container/login.svelte";
</script>

<div class="content">
    <div class="content-body">
        <Route path="login">
            <LoginContainer />
        </Route>
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