import React, { ReactNode } from "react";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import "./formitem.scss";
interface IFormItem {
  textLabel?: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  icon?: ReactNode;
  placeholder?: string;
  outline?: string;
  border?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  className?: string;
  paddingLabel?:string
}

const FormItem = (PropsFormItem: IFormItem) => {
  return (
    <>
      <div className="wapper__formitem">
        <Label
          fontFamily={PropsFormItem.fontFamily}
          fontSize="14px"
          color={PropsFormItem.color}
          padding={PropsFormItem.paddingLabel}
          lineHeight="1.5"
        >
          {PropsFormItem.textLabel}{" "}
        </Label>
        <Input
          outline={PropsFormItem.outline}
          border={PropsFormItem.border}
          fontFamily={PropsFormItem.fontFamily}
          fontSize={PropsFormItem.fontSize}
          color={PropsFormItem.color}
          lineHeight={PropsFormItem.lineHeight}
          width={PropsFormItem.lineHeight}
          height={PropsFormItem.height}
          padding={PropsFormItem.padding}
          className="wapper__formitem__input"
          placeholder={PropsFormItem.placeholder}
          type={PropsFormItem.type}
        ></Input>
        <span className="wapper__formitem__focus">
          <span className={"icon"}>{PropsFormItem
          .icon}</span>
        </span>
      </div>
    </>
  );
};
export default FormItem;
