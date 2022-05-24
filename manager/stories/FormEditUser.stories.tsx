import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormEditUser from "./FormEditUser";

export default {
  title: "Example/CFormEditUser",
  component: CFormEditUser,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CFormEditUser>;

const Template: ComponentStory<typeof CFormEditUser> = (args) => (
  <CFormEditUser />
);
export const Default = Template.bind({});
Default.args = {};
