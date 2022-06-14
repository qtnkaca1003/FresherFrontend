import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormLogin from "./Login";
export default {
  title: "Organisms/FormLogin",
  component: FormLogin,
  argTypes: {},
} as ComponentMeta<typeof FormLogin>;

const Template: ComponentStory<typeof FormLogin> = (args) => <FormLogin />;

export const Default = Template.bind({});
Default.args = {};
