import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CMenuButton from "./MenuButton1";
export default {
  title: "Atoms/MenuButton",
  component: CMenuButton,
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
    children: { description: "React Node" },
    disabled: { description: "boolean" },
  },
} as ComponentMeta<typeof CMenuButton>;

const Template: ComponentStory<typeof CMenuButton> = (args) => (
  <CMenuButton {...args} />
);
export const Default = Template.bind({});
Default.args = {
  fontSize: "15px",
  fontWeight: "500",
  disabled: false,
};
