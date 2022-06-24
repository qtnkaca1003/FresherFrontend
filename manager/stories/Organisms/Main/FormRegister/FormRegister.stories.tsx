import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import FromRegister from "./formregister";
export default {
  title: "Organisms/Main/FromRegister",
  component: FromRegister,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FromRegister>;

const Template: ComponentStory<typeof FromRegister> = (args) => (
  <FromRegister  />
);
export const Default = Template.bind({});
Default.args = {
 
};
