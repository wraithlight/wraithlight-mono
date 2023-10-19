import { mustacheFacade } from "@wraithlight/facade.mustache";

export function wlMustache<T>(template: string, data: T): string {
    return mustacheFacade(template, data).renderedTemplate;
}
