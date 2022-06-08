import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {Header1} from "./header1";
const dataCategorys :string[] = ["electronics", "jewelery", "men's clothing", "women's clothing"];
export default {
  title: "Organisms/Header/Header1",
  component: Header1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    
  },
} as ComponentMeta<typeof Header1>;
const Template: ComponentStory<typeof Header1> = (args) => (
  <Header1  />
);
export const Default = Template.bind({});
Default.args = {
 
};
