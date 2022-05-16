import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "./input";

export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /* argTypes: {
      backgroundColor: { control: "color" },
    }, */
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});