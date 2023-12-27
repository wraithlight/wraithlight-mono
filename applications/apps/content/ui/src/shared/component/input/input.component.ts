import "./input.component.scss";

import m, { Children, Component, Vnode } from "mithril";

import { InputComponentProps } from "./input.model";

export class InputComponent implements Component<InputComponentProps> {

    public view(vnode: Vnode<InputComponentProps, object>): Children {
        return m(
            "div.input-container",
            m("label.input-label", {
                for: vnode.attrs.elementId,
                id: `${vnode.attrs.elementId}-label`
            },
                vnode.attrs.label
            ),
            m("input.input-element", {
                id: vnode.attrs.elementId,
                onchange: (event: { target: HTMLInputElement }) => vnode.attrs.onChange(event.target.value),
                type: vnode.attrs.type
            })
        );
    }

}
