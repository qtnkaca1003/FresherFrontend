import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CLinknavi from "./index";
export default {
  title: "Molecules/LinkNavigation",
  component: CLinknavi,

  argTypes: {
    title: { description: "string" },
    
    link: { description: "href: string" },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CLinknavi>;

const Template: ComponentStory<typeof CLinknavi> = (args) => (
  <CLinknavi {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: "Link Navigation",
  link: "/link",
};
