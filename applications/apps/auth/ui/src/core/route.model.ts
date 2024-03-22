import type { SvelteComponent } from "svelte";

export interface Route {
    name: string;
    component: typeof SvelteComponent,
    layout?: typeof SvelteComponent
}
