import { ComponentMeta, ComponentStory, Meta } from "@storybook/react";
import React from "react";
import CButton from "./button";
const data = {
  title: "Button",
  borderRadius: "5px",
  color: "#000",
  colorScheme: "gray",
  disabled: false,
  fontSize: "18px",
  fontWeight: "500",
  height: "40px",
  width: "100px",
  type: "button" || "button",
};
export default {
  title: "Atoms/Button",
  component: CButton,
  argTypes: {
    
    borderRadius: {
      description: "string",
    },
    color: { description: "name color, hex, rgb" },
    colorScheme: { description: "Backgound color: string" },
    disabled: { description: "boolean" },
    className: { description: "string" },
    fontSize: { description: "string" },
    fontWeight: { description: "string" },
    title: { description: "string" },
    height: { description: "string" },
    icon: { description: "ReactNode" },
    m: { description: "Margin:  string | number" },
    ml: { description: "Margin left: string" },
    mr: { description: "Margin right: string" },
    mt: { description: "Margin top: string" },
    onClick: { description: "function " },
    type: { description: `"button"|"submit"|"reset"`},
    width: { description: "string" },
  },
} as ComponentMeta<typeof CButton>;
const Template: ComponentStory<typeof CButton> = (args) => (
  <CButton {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: "Button",
  borderRadius: "5px",
  color: "#000",
  colorScheme: "gray",
  disabled: false,
  fontSize: "18px",
  fontWeight: "500",
  height: "40px",
  width: "100px",
  type: "button",
};
