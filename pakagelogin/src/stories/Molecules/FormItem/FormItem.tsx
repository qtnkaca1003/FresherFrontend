import React, { ReactNode } from "react";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import "./formitem.scss";
interface IFormItem {
  //input
  typeInput?:
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
  required?:boolean
  //Label
  fontWeightLabel?:
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"
    | "lighter"
    | "normal"
    | "initial";
  textLabel?: string;
  classNameLabel?: string;
  paddingLabel?: string;
  fontFamilyLabel?: string;
  fontSizeLabel?: string;
  colorLabel?: string;
  lineHeightLabel?: string;
}
const FormItem = (PropsFormItem: IFormItem) => {
  return (
    <>
      <div className="wapper__formitem">
        <Label
          className={PropsFormItem.classNameLabel}
          fontWeight={PropsFormItem.fontWeightLabel}
          fontFamily={PropsFormItem.fontFamilyLabel}
          fontSize={PropsFormItem.fontSizeLabel}
          color={PropsFormItem.colorLabel}
          padding={PropsFormItem.paddingLabel}
          lineHeight={PropsFormItem.lineHeightLabel}
          text={PropsFormItem.textLabel}
        />

        <Input
          required={PropsFormItem.required}
          type={PropsFormItem.typeInput}
          onChange={PropsFormItem.onChange}
          outline={PropsFormItem.outlineInput}
          border={PropsFormItem.borderInput}
          fontFamily={PropsFormItem.fontFamilyInput}
          fontSize={PropsFormItem.fontSizeInput}
          color={PropsFormItem.colorInput}
          lineHeight={PropsFormItem.lineHeightInput}
          width={PropsFormItem.widthInput}
          height={PropsFormItem.heightInput}
          padding={PropsFormItem.paddingInput}
          className="wapper__formitem__input"
          placeholder={PropsFormItem.placeholderInput}
        />
        <span className="wapper__formitem__focus">
          <span className={"icon"}>{PropsFormItem.iconInput}</span>
        </span>
      </div>
    </>
  );
};
export default FormItem;
