import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react"; 
import Button from "./Button";
export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button Medium",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  text: "Button Large",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  text: "Button Small",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  size: "small",
};
