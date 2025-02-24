<script lang="ts">
    import type { CurrentRoute } from "../core";

    import Sidebar from "./sidebar/sidebar.svelte";
    import Content from "./content/content.svelte";

    export let currentRoute: CurrentRoute;

</script>

<Sidebar>
</Sidebar>
<Content {currentRoute}>
</Content>
