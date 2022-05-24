import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormUser from "./FormUser";

export default {
  title: "Example/CFormUser",
  component: CFormUser,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CFormUser>;

const Template: ComponentStory<typeof CFormUser> = (args) => <CFormUser />;
export const Default = Template.bind({});
Default.args = {
  
};
