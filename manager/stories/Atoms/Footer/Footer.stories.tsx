import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {Footer} from "./index"
export default {
  title: "Atoms/Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);
export const Default = Template.bind({});
Default.args = {
 
};
