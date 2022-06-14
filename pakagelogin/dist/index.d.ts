import { MouseEventHandler, ReactNode } from 'react';

interface IButton {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}
declare const Button: (PropsButton: IButton) => JSX.Element;

interface IInput {
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder?: string;
    textlebel?: string;
    icon?: ReactNode;
    children?: ReactNode;
}
declare const Input: (PropsTitle: IInput) => JSX.Element;

interface ILink {
    text?: string;
    link?: string;
    children?: ReactNode;
}
declare const Link: (PropsLink: ILink) => JSX.Element;

interface IText {
    text?: string;
    children?: ReactNode;
}
declare const Text: (PropsTitle: IText) => JSX.Element;

interface ITitle {
    text?: string;
    size?: "small" | "medium" | "large";
    children?: ReactNode;
}
declare const Title: (PropsTitle: ITitle) => JSX.Element;

export { Button, Input, Link, Text, Title };
