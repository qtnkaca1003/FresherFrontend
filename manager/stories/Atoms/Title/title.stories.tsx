import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Title from "./Title";

export default {
  title: "Atoms/Title",
  component: Title,

  argTypes: {
    title: { description: "string" },
    fontWeight: { description: "string" },
    fontSize: { description: "string" },
    color: { control: "color" },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;
export const Default = Template.bind({});
Default.args = {
  color: "black",
  fontSize: "20px",
  fontWeight: "bolder",
  title: "Title",
};
