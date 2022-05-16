import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Title } from "./title";

export default {
  title: "Example/Title",
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /* argTypes: {
      backgroundColor: { control: "color" },
    }, */
} as ComponentMeta<typeof Title>;
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;
export const Default = Template.bind({});
Default.parameters = {
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" },
    ],
  },
};
