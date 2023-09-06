<script lang="ts">
    import { Store } from "@wraithlight/core.redux";
    import { AuthAction } from "@wraithlight/common.auth-sdk.client";
    const store = Store.getInstance();

    let username = "";
    let password = "";
    function tryLogin(): void {
        store.dispatch(AuthAction.login(username, password));
    }
</script>

<div class="login-container">
    <h1>Log In</h1>
    <table>
        <tr>
            <td>
                Username
            </td>
            <td>
                <input type="text" bind:value={username}>
            </td>
        </tr>
        <tr>
            <td>
                Password
            </td>
            <td>
                <input type="password" bind:value={password}>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <button on:click={tryLogin}>Submit</button>
            </td>
        </tr>
    </table>
</div>


<style>
    .login-container {
        width: 80%;
        border: 1px solid var(--primary);
        height: 500px;
        margin-top: 4rem;
        padding: 2rem;
        box-sizing: border-box;
    }
    h1 {
        outline: none;
    }
</style>