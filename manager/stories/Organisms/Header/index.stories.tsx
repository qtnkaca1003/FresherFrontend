import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {Header} from "./index";

export default {
  title: "Organisms/Header/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    
  },
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => (
  <Header  />
);
export const Default = Template.bind({});
Default.args = {
 
};
