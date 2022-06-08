import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CAvatar from "./avatar";
export default {
  title: "Atoms/Avatar",
  component: CAvatar,

  argTypes: {
    backgroundColor: { control: "color" },
    m: { description: "string" },
    size: {
      description: `"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"`,
    },
    src: { description: "string" },
  },
} as ComponentMeta<typeof CAvatar>;

const Template: ComponentStory<typeof CAvatar> = (args) => (
  <CAvatar {...args} />
);
export const Default = Template.bind({});
Default.args = {
  m: "5px",
  size: "xl",
  src: "/image/avatar.jpg",
};
