import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label from "./Label";
export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontFamily:"Poppins-Regular",
  fontWeight:"bold",
  fontSize:"14px",
  color:"#333",
  lineHeight:"1.5",
  text:"Label"
};
