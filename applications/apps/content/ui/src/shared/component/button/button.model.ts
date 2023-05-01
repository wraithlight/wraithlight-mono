export type ButtonType = "primary" | "secondary" | "danger";

export interface ButtonComponentProps {
    isDisabled: boolean;
    onClick: () => void;
    label: string;
    type: ButtonType;
    isOutline?: boolean;
    elementId: string;
}
