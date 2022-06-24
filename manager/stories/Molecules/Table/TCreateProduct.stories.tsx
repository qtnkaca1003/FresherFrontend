import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TCreateProduct from "./TCreateProduct";
export default {
  title: "Molecules/Table/TCreateProduct",
  component: TCreateProduct,

  argTypes: {
   
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TCreateProduct>;

const Template: ComponentStory<typeof TCreateProduct> = (args) => (
  <TCreateProduct {...args} />
);
export const Default = Template.bind({});
{
Default.args={
    
}
  
};
