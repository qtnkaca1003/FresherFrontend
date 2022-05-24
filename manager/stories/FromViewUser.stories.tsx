import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CFormViewUser from "./FromViewUser";

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
  title: "Example/CFormViewUser",
  component: CFormViewUser,
} as ComponentMeta<typeof CFormViewUser>;

const Template: ComponentStory<typeof CFormViewUser> = (args) => (
  <CFormViewUser {...args} />
);
export const Default = Template.bind({});
Default.args = {
  user: user,
};
