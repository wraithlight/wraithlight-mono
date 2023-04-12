import { components } from "knockout";

export function addComponent(
    selector: string,
    template: string,
    viewModelFactory: () => unknown
): void {
    components.register(
        selector,
        {
            template: template,
            viewModel: viewModelFactory
        }
    );
}
