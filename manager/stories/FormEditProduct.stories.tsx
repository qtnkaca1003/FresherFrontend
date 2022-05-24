import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormEditProduct from "./FormEditProduct";

export default {
  title: "Example/CFormEditProduct",
  component: CFormEditProduct,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CFormEditProduct>;

const Template: ComponentStory<typeof CFormEditProduct> = (args) => (
  <CFormEditProduct />
);
export const Default = Template.bind({});
Default.args = {};
