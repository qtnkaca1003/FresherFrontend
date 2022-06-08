import { FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import CFormlabel from "../../Atoms/FormLabel/FormLabel";

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
  name?: string;
  nameInput?: string;
  idInput?: string;
  typeInput?: string;
  focusBorderColorInput?: string;
  widthInput?: string;
  heightInput?: string;
  readOnlyInput?: boolean;
  ref?: any;
  children?: React.ReactNode;
  isRequired?: boolean;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CFromInput = (formInputProps: IFromInput) => {
  const { register } = useFormContext();
  return (
    <FormControl ml={2} isRequired={formInputProps.isRequired}>
      <CFormlabel
        htmlFor={formInputProps.htmlFor}
        fontWeight={formInputProps.fontWeight}
        color={formInputProps.color}
        fontSize={formInputProps.fontSize}
      >
        {formInputProps.textformlabel}
      </CFormlabel>
      <Input
        placeholder={formInputProps.placeholderInput}
        defaultValue={formInputProps.defaultValueInput}
        type={formInputProps.typeInput}
        width={formInputProps.widthInput}
         {...register(`${formInputProps.name}`)}
      />
      
      {formInputProps.children}
    </FormControl>
  );
};
export default CFromInput;
