import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  outline: "none",
  placeholder: "Input...",
  width: "360px",
  height: "40px",
  type: "text",
  color: "#000",
  fontSize: "20px",
};
