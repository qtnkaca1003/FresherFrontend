import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CLink from "./Link";

export default {
  title: "Atoms/Link",
  component: CLink,
  argTypes: {
    link: { description: "string" },
    title: { description: "string" },
    id: { description: "string" },
    fontWeight: { description: "string" },
    fontSize: { description: "string" },
    color: { control: "color" },
  },
} as ComponentMeta<typeof CLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CLink> = (args) => <CLink {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Link story book",
  fontSize: "15px",
  fontWeight: "500",
  link: "/",
  color:"blue"
};
