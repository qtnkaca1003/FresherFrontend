import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormRegister from "./index";
export default {
  title: "Organisms/Form/Register",
  component: CFormRegister,

  argTypes: {
    backgroundColor: { control: "color" },
    
  },
} as ComponentMeta<typeof CFormRegister>;

const Template: ComponentStory<typeof CFormRegister> = () => (
  <CFormRegister  />
);
export const Default = Template.bind({});
Default.args = {
 
};  
