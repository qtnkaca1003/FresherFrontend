import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormlabel from "./FormLabel";

export default {
  title: "Atoms/FormLabel",
  component: CFormlabel,
  argTypes: {
    children:{description:"ReactNode"},
    color:{ control: "color" },
    fontSize:{description:"string"},
    fontWeight:{description:"string"},
    htmlFor:{description:"string"}

  },
} as ComponentMeta<typeof CFormlabel>;

const Template: ComponentStory<typeof CFormlabel> = (args) => (
  <CFormlabel {...args}/>
);
export const Default = Template.bind({});
Default.args = {
  htmlFor: "Form Lable",
  color: "red",
  fontSize:"15px",
  children:"Form Lable"

};
