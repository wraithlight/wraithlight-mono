export interface InputComponentProps {
    label: string;
    type: InputType;
    elementId: string;
    onChange: (value: string) => void;
}

export type InputType = "input" | "password" | "tel";