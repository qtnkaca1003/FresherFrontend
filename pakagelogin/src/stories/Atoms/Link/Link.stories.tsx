import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";
export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontFamily: "Poppins-Regular",
  fontWeight: "bold",
  fontSize: "14px",
  color: "#333",
  lineHeight: "1.5",
  text: "Link ",
  textDecoration: "none",
  link: "/fb.com",
  textAlign: "left",
};
