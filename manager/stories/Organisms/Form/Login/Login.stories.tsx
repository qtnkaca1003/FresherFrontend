import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormLogin from "./index";
export default {
  title: "Organisms/Form/Login",
  component: CFormLogin,

  argTypes: {
    backgroundColor: { control: "color" },
    
  },
} as ComponentMeta<typeof CFormLogin>;

const Template: ComponentStory<typeof CFormLogin> = () => (
  <CFormLogin  />
);
export const Default = Template.bind({});
Default.args = {
 
};  
