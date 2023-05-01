import "./button.component.scss";

import m, { Children, Component, Vnode } from "mithril";

import { ButtonComponentProps } from "./button.model";

export class ButtonComponent implements Component<ButtonComponentProps> {

    public view(vnode: Vnode<ButtonComponentProps, {}>): Children {
        const classNameList = [
            "button-component",
            !vnode.attrs.isOutline
                ? `button-component-${vnode.attrs.type}`
                : `button-component-outline-${vnode.attrs.type}`
        ];
        return m("button", {
            id: vnode.attrs.elementId,
            onclick: () => vnode.attrs.onClick(),
            disabled: vnode.attrs.isDisabled,
            className: classNameList.join(" ")
        }, vnode.attrs.label);
    }

}
