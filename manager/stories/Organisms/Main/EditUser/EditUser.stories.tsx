import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CEditUser from "./edituser";
export default {
  title: "Organisms/Main/EditUser",
  component: CEditUser,

  argTypes: {
    
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CEditUser>;

const Template: ComponentStory<typeof CEditUser> = (args) => (
  <CEditUser  />
);
export const Default = Template.bind({});
Default.args = {
 
};
