import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormAddUser from "./adduser";
export default {
  title: "Organisms/Main/AddUser",
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
