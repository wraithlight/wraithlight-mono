<script lang="ts">
    import { Link } from "svelte-navigator";
    import { Store, type SelectorResultStopFn } from "@wraithlight/core.redux";
    import { AuthSelector } from "@wraithlight/common.auth-sdk.client";
    
    const store = Store.getInstance();

    let isAuthenticated = false;
    const stopFns: Array<SelectorResultStopFn> = [];

    store
        .select(AuthSelector.state)
        .onSelection((value, stopFn) => {
            stopFns.push(stopFn);
            isAuthenticated = value.isLoggedIn;
            alert(value);
        });
</script>

<div class="sidebar">
    <div class="sidebar-content">
        <div class="sidebar-content__head">
            <span class="sidebar-content__head-title">
                wlum
            </span>
        </div>
        <div class="sidebar-content__body">
            {#if isAuthenticated}
                <div class="sidebar-content__body-item">
                    Users
                </div>
                <div class="sidebar-content__body-item">
                    Applications
                </div>
                <div class="sidebar-content__body-item">
                    Log Out
                </div>
            {/if}
            {#if !isAuthenticated}
                <div class="sidebar-content__body-item">
                    <Link to="login">
                        Log In
                    </Link>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .sidebar {
        width: 20%;
        height: 100%;
        background-color: var(--primary)
    }
    .sidebar-content {
        width: 100%;
        height: 100%;
        padding: 8px;
        box-sizing: border-box;
        color: var(--on-primary);
        font-family: Arial, Helvetica, sans-serif;
    }
    .sidebar-content__head {
        display: flex;
        justify-content: center;
    }
    .sidebar-content__head-title {
        font-size: 3rem;
        font-weight: 800;
        text-transform: uppercase;
    }
    .sidebar-content__body {
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid var(--on-primary);
    }
    .sidebar-content__body-item {
        padding: 4px;
        cursor: pointer;
        border-radius: 8px;
    }
    .sidebar-content__body-item:hover {
        background-color: var(--primary-variant);
    }
</style>