import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Cart from "./Cart";

export default {
  title: "Example/Cart",
  component: Cart,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = () => <Cart />;
export const Default = Template.bind({});
Default.args = {};
