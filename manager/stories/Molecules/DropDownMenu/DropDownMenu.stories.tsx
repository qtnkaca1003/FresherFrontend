import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CDropDown from "./index";
export default {
  title: "Molecules/DropDownMenu",
  component: CDropDown,
  argTypes: {
    contentMenuItem: { description: "string" },
    heightItem: { description: "string" },
    widthItem: { description: "string" },
    title: { description: "string" },
    src: { description: "string" },
    onClickMenuItem: { description: "Function" },
  },
} as ComponentMeta<typeof CDropDown>;

const Template: ComponentStory<typeof CDropDown> = (args) => (
  <CDropDown {...args} />
);
export const Default = Template.bind({});
Default.args = {
  contentMenuItem: "Item",
  title: "Menu",
  fontSize: "16px",
};
