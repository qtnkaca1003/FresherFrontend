import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CSearch from "./index";
export default {
  title: "Molecules/Search",
  component: CSearch,

  argTypes: {
    backgroundColor: { control: "color" },
    placeholder:{description:"string"},
  },
} as ComponentMeta<typeof CSearch>;

const Template: ComponentStory<typeof CSearch> = (args) => (
  <CSearch {...args} />
);
export const Default = Template.bind({});
Default.args = {
placeholder:"Search story book ...",
w:"300px"
 
  
};
