import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PaginUser from "./PaginUser";
const data = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
      },
    ],
  };
export default {
  title: "Atoms/Button Pagin/PaginUser",
  component: PaginUser,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PaginUser>;

const Template: ComponentStory<typeof PaginUser> = (args) => (
  <PaginUser {...args} />
);
export const Default = Template.bind({});
Default.args = {
    data:data,
    itemPage:data.per_page,
    maxPageNumerLitmit:10,
    pageNumerLitmit:10
   
  };
