import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {Navigation} from "./index";
export default {
  title: "Organisms/Main/Navigation",
  component: Navigation,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation/>
);
export const Default = Template.bind({});
Default.args = {
 
};
