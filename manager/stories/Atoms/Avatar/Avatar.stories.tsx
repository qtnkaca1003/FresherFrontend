import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CAvatar from "./avatar";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Avatar",
  component: CAvatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CAvatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CAvatar> = (args) => (
  <CAvatar {...args} />
);
export const Default = Template.bind({});
Default.args = {
  m: "5px",
  size: "xl",
  src: "/image/avatar.jpg",
};
