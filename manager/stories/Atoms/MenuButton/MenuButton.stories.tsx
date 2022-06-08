import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CMenuButton from "./MenuButton";
export default {
  title: "Atoms/MenuButton",
  component: CMenuButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CMenuButton>;


const Template: ComponentStory<typeof CMenuButton> = (args) => <CMenuButton {...args} />;
export const Default = Template.bind({});
Default.args = {

  fontSize: "15px",
  fontWeight: "500",
 
};
