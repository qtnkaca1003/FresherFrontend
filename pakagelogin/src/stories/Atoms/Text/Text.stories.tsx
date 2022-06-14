import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";
export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontFamily:"Poppins-Regular",
  fontWeight:"bold",
  fontSize:"20px",
  color:"#333",
  lineHeight:"1.5",
  text:"Đoạn văn",
  textAlign:"center",

};


 

