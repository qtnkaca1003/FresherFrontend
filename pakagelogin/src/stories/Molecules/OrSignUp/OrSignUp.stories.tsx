import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EmailIcon } from "../../Atoms/Icon/IconEmail";
import { FbIcon } from "../../Atoms/Icon/IconFb";
import { GgIcon } from "../../Atoms/Icon/IconGg";
import OrSignUp from "./OrSignUp";
export default {
  title: "Molecules/OrSignUp",
  component: OrSignUp,
  argTypes: {},
} as ComponentMeta<typeof OrSignUp>;

const Template: ComponentStory<typeof OrSignUp> = (args) => (
  <OrSignUp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Or Sign Up",
  iconGg: <GgIcon />,
  iconFb: <FbIcon />,
  iconMail: <EmailIcon />
};
