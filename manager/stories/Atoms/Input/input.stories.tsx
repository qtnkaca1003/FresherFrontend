import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CInput from "./input";

export default {
  title: "Atoms/Input",
  component: CInput,
  argTypes: {
    placeholder: { description: "string" },
    border: { description: "string" },
    defaultValue: { description: "string" },
    name: { description: "string" },
    id: { description: "string" },
    type: { description: "string" },
    focusBorderColor: { description: "string" },
    width: { description: "string" },
    height: { description: "string" },
    value: { description: "string" },
    readOnly: { description: "boolean" },
    outline: { description: "string" },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CInput> = (args) => <CInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: "Input story book...",
  border: "1px",
  width: " 300px",
  height: "30px",
};
