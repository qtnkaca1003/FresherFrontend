import { FormControl } from "@chakra-ui/react";
import React from "react";
import CFormlabel from "../../atoms/formlabel";
import CInput from "../../atoms/input";

interface IFromInput {
  htmlFor?: string;
  textformlabel: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  outlineInput?: string;
  valueInput?: string;
  placeholderInput?: string;
  borderInput?: string;
  defaultValueInput?: string;
  nameInput?: string;
  idInput?: string;
  typeInput?: string;
  focusBorderColorInput?: string;
  widthInput?: string;
  heightInput?: string;
  readOnlyInput?: boolean;
  
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CFromInput = (props: IFromInput) => {
  return (
    <FormControl ml={2}>
      <CFormlabel
        textformlabel={props.textformlabel}
        htmlFor={props.htmlFor}
        fontWeight={props.fontWeight}
        color={props.color}
        fontSize={props.fontSize}
      />

      <CInput
        
        readOnly={props.readOnlyInput}
        outline={props.outlineInput}
        width={props.widthInput}
        height={props.heightInput}
        value={props.valueInput}
        defaultValue={props.defaultValueInput}
        name={props.nameInput}
        id={props.idInput}
        type={props.typeInput}
        onChange={props.onChange}
        border={props.borderInput}
        focusBorderColor={props.focusBorderColorInput}
        placeholder={props.placeholderInput}
      />
    </FormControl>
  );
};
export default CFromInput;
