import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormEditUserAfter from "./FormEditUserAfter";
export default {
  title: "Organisms/Form/FormEditUserAfter",
  component: CFormEditUserAfter,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CFormEditUserAfter>;

const Template: ComponentStory<typeof CFormEditUserAfter> = (args) => (
  <CFormEditUserAfter /* {...args} */  />
);
export const Default = Template.bind({});
Default.args = {
 
};
