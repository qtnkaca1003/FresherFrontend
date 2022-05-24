import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ModalView from "./modelUser";
const user = {
    address: {
      geolocation: {
        lat: "30.24788",
        long: "-20.545419",
      },
      city: "fort wayne",
      street: "oak lawn ave",
      number: 526,
      zipcode: "10256-4532",
    },
    id: 26,
    email: "jimmie@gmail.com",
    username: "jimmie_k",
    password: "klein*#%*",
    name: {
      firstname: "jimmie",
      lastname: "klein",
    },
    phone: "1-104-001-4567",
    __v: 0,
  };
export default {
  title: "Example/ModalView",
  component: ModalView,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ModalView>;

const Template: ComponentStory<typeof ModalView> = (args) => <ModalView {...args} />;
export const Default = Template.bind({});
Default.args = {
  user: user
};
