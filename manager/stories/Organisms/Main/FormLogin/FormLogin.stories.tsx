import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import FromLogin from "./fromlogin";
export default {
  title: "Organisms/Main/FromLogin",
  component: FromLogin,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FromLogin>;

const Template: ComponentStory<typeof FromLogin> = (args) => (
  <FromLogin  />
);
export const Default = Template.bind({});
Default.args = {
 
};
