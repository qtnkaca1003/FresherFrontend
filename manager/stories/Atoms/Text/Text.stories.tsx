import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CText from "./Text";

export default {
  title: "Atoms/Text",
  component: CText,
  argTypes: {
    title: { description: "string" },
    fontWeight: { description: "string" },
    fontSize: { description: "string" },
    color:{ control: "color" },
    textAlign: { description: "string" },
    mt: { description: "string" },
    fontStyle: { description: "string" },
   
  },
} as ComponentMeta<typeof CText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CText> = (args) => <CText {...args} />;
export const Default = Template.bind({});
Default.args = {
  title:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  fontSize: "15px",
  color: "black",
  fontWeight: "400",
};
