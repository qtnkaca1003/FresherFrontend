import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ModalDel from "./index";
export default {
  title: "Molecules/ModalDel",
  component: ModalDel,

  argTypes: {
    id: { description: "id user | id product" },
    name: { description: "name user | name product" },
    onClickBtn: { description: "function" },
    title: { description: "string" },
    color: { control: "color" },
    bgColor: { control: "color" },
  },
} as ComponentMeta<typeof ModalDel>;

const Template: ComponentStory<typeof ModalDel> = (args) => (
  <ModalDel {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: "Delete",
  bgColor:"red"
};
