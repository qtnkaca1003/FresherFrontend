import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormItem from "./FormItem";
import { UserIcon } from "../../Atoms/Icon/IconUser";
export default {
  title: "Molecules/FormItem",
  component: FormItem,
  argTypes: {},
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => (
  <FormItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  textLabel: "Username",
  outline: "none",
  border: "none",
  paddingLabel: "0 0 0 7px",
  padding: "0 7px 0 34px",
  lineHeight: "1.3",
  placeholder: "Type username...",
  width: "360px",
  height: "40px",
  type: "text",
  color: "#000",
  fontSize: "20px",
  icon: <UserIcon />
};
