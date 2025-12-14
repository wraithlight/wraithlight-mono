import { components } from "knockout";

export function addComponent(
  selector: string,
  template: string,
  viewModelFactory: () => unknown
): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  components.register(
    selector,
    {
      template: template,
      viewModel: viewModelFactory
    }
  );
}
