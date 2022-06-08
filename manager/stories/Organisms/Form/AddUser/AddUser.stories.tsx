import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormAddUser from "./index";
export default {
  title: "Organisms/Form/AddUser",
  component: CFormAddUser,

  argTypes: {

    backgroundColor: { control: "color" },
    
  },
} as ComponentMeta<typeof CFormAddUser>;

const Template: ComponentStory<typeof CFormAddUser> = (args) => (
  <CFormAddUser  />
);
export const Default = Template.bind({});
Default.args = {
 
};
