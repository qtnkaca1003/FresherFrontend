import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFromInput from "./index1";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/FromInput",
  component: CFromInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    textformlabel: { description: "string" },
    htmlFor: { description: "string" },
    idInput: { description: "string" },
    nameInput: { description: "string" },
    placeholderInput: { description: "string" },
    widthInput: { description: "string" },
  },
} as ComponentMeta<typeof CFromInput>;

const Template: ComponentStory<typeof CFromInput> = (args) => (
  <CFromInput {...args} />
);
export const Default = Template.bind({});
Default.args = {
  textformlabel: "Name",
  htmlFor: "name",
  idInput: "name",
  nameInput: "name",
  placeholderInput: "Form Item",
  widthInput: "400px",
};
