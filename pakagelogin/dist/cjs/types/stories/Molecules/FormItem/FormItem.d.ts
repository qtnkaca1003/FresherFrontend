import React, { ReactNode } from "react";
import "./formitem.scss";
interface IFormItem {
    typeInput?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    icon?: ReactNode;
    placeholderInput?: string;
    outlineInput?: string;
    borderInput?: string;
    fontFamilyInput?: string;
    fontSizeInput?: string;
    colorInput?: string;
    lineHeightInput?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    widthInput?: string;
    heightInput?: string;
    paddingInput?: string;
    classNameInput?: string;
    iconInput?: ReactNode;
    required?: boolean;
    fontWeightLabel?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    textLabel?: string;
    classNameLabel?: string;
    paddingLabel?: string;
    fontFamilyLabel?: string;
    fontSizeLabel?: string;
    colorLabel?: string;
    lineHeightLabel?: string;
}
declare const FormItem: (PropsFormItem: IFormItem) => JSX.Element;
export default FormItem;
