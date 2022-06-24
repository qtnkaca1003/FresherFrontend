import { ComponentMeta, ComponentStory } from "@storybook/react";
import Login from "./Index";
export default {
  title: "Template/Login",
  component: Login,
  argTypes: {},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login textButton="Login" typeButton="button" />;

export const Default = Template.bind({});
Default.args = {};
