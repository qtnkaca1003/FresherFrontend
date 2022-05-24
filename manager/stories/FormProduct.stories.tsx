import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormProduct from "./FormProduct";

export default {
  title: "Example/CFormProduct",
  component: CFormProduct,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CFormProduct>;

const Template: ComponentStory<typeof CFormProduct> = (args) => (
  <CFormProduct />
);
export const Default = Template.bind({});
Default.args = {};
