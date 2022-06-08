import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CTabs from "./tabs";
export default {
  title: "Organisms/Main/PageLogin",
  component: CTabs,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CTabs>;

const Template: ComponentStory<typeof CTabs> = (args) => (
  <CTabs/>
);
export const Default = Template.bind({});
Default.args = {
 
};
