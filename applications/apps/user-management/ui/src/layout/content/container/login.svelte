<script lang="ts">
  import { Store } from "@wraithlight/core.redux";
  import { AuthAction } from "@wraithlight/common.auth-sdk.client";
  const store: Store<UserManagementGlobalState> = Store.getInstance();

  import type { UserManagementGlobalState } from "../../../sdk";

  let username = "";
  let password = "";
  function tryLogin(): void {
    store.dispatch(AuthAction.login(username, password));
  }
</script>

<div class="login-container">
  <h1>Log In</h1>
  <form>
    <!--  TODO: Add submit event -->
    <table>
      <tr>
        <td> Username </td>
        <td>
          <input id="login-username" type="text" bind:value={username} />
        </td>
      </tr>
      <tr>
        <td> Password </td>
        <td>
          <input id="login-password" type="password" bind:value={password} />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button id="login-submit" on:click={tryLogin}> Submit </button>
        </td>
      </tr>
    </table>
  </form>
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
