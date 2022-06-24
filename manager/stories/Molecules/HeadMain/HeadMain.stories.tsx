import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CHeadmain from "./index";
export default {
  title: "Molecules/HeadMain",
  component: CHeadmain,

  argTypes: {
    title: { description: "string" },
    placeholder: { description: "string" },
    titleBtn: { description: "string" },
    onChangeSearch: { description: "Function" },
    onClickBtn: { description: "Function" },
    color: { control: "color" },
    colorBnt: { control: "color" },
    bgColor: { control: "color" },
  },
} as ComponentMeta<typeof CHeadmain>;

const Template: ComponentStory<typeof CHeadmain> = (args) => (
  <CHeadmain {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: "Title main",
  placeholder: "Search",
  titleBtn: "Button",
};
