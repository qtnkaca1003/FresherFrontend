import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CCard from "./index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Card",

  component: CCard,
  argTypes: {
    sizeAvatar: {
      control: {
        type: "select",
        options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
      },
      description: `"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"`,
    },
    srcAvatar: { description: "string" },
    colorTitle: { control: "color" },
    fontSizeTitle: { description: "string" },
    fontWeightTitle: { description: "string" },
    titleTitle: { description: "string" },
    border: { description: "string" },
    w: { description: "string | number" },
    h: { description: "string | number" },
    
  },
} as ComponentMeta<typeof CCard>;
const Template: ComponentStory<typeof CCard> = (args) => <CCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  colorTitle: "#000",
  titleTitle: "Name",
  fontSizeTitle: "24px",
  sizeAvatar: "lg",
  fontWeightTitle: "700",
  srcAvatar: "./image/avatar.jpg",
  w: 170,
  h: 200,
};
