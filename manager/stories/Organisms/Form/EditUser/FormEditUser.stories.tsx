import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormEditUser from "./FormEditUser";
export default {
  title: "Organisms/Form/FormEditUser",
  component: CFormEditUser,

  argTypes: {
    backgroundColor: { control: "color" },
    data:{description:"[{ }]"},
  },
} as ComponentMeta<typeof CFormEditUser>;

const Template: ComponentStory<typeof CFormEditUser> = (args) => (
  <CFormEditUser {...args}  />
);
export const Default = Template.bind({});
Default.args = {
 
};
