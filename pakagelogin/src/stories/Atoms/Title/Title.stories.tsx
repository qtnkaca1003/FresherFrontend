import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "./Title";
export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontFamily:"Poppins-Regular",
  fontWeight:"bold",
  fontSize:"39px",
  color:"#333",
  lineHeight:"1.5",
  text:"Title ",
  textAlign:"center",

};


 

