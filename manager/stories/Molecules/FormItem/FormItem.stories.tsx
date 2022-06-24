import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFromInput from "./index1";
export default {
  title: "Molecules/FromInput",
  component: CFromInput,
  argTypes: {
   
    textformlabel: { description: "string" },
    htmlFor: { description: "string" },
    idInput: { description: "string" },
    nameInput: { description: "string" },
    placeholderInput: { description: "string" },
    widthInput: { description: "string" },
    color:{ control: "color" },
  },
} as ComponentMeta<typeof CFromInput>;

const Template: ComponentStory<typeof CFromInput> = (args) => (
  <CFromInput {...args} />
);
export const Default = Template.bind({});
Default.args = {
  textformlabel: "Name",
  htmlFor: "name",
  idInput: "name",
  nameInput: "name",
  placeholderInput: "Form Item",
  
  widthInput: "400px",
  color:"#000"
};
