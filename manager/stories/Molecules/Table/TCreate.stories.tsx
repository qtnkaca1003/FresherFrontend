import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TCreate from "./TCreate";
export default {
  title: "Molecules/Table/TCreate",
  component: TCreate,

  argTypes: {
    
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TCreate>;

const Template: ComponentStory<typeof TCreate> = (args) => (
  <TCreate {...args} />
);
export const Default = Template.bind({});
{
Default.args={
    
}
  
};
