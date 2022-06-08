import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormProduct from "./index";
const dataCategorys :string[] = ["electronics", "jewelery", "men's clothing", "women's clothing"];
export default {
  title: "Organisms/Form/AddProduct",
  component: CFormProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    arrCategorys:{description:"Array[]"},
    createProduct:{description:"[{ }]"}
  },
} as ComponentMeta<typeof CFormProduct>;
const Template: ComponentStory<typeof CFormProduct> = (args) => (
  <CFormProduct {...args} />
);
export const Default = Template.bind({});
Default.args = {
 arrCategorys:dataCategorys
};
