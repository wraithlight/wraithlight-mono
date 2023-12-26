import { render } from "mustache";

import { MustacheRenderResult } from "./mustache.model";

export function mustacheFacade<T>(template: string, model: T): MustacheRenderResult {
    let renderedTemplate = template;
    try {
        renderedTemplate = render(template, model);
        return { isSuccess: true, renderedTemplate: renderedTemplate }
    } catch {
        return { isSuccess: false, renderedTemplate: template }
    }
}