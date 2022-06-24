import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PaginProduct from "./paginProduct";

const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
  },
];
export default {
  title: "Atoms/Button Pagin/PaginProduct",
  component: PaginProduct,
  argTypes: {
    data: { description: "Array Obj" },
    
    itemPage: { description: "Tính số trang hiện có" },
    maxPageNumerLitmit: { description: "Số button tối đa hiển thị" },
    pageNumerLitmit: { description: "Hiển thị số button" },
    path: { description: "string" },
  },
} as ComponentMeta<typeof PaginProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaginProduct> = (args) => (
  <PaginProduct {...args} />
);
export const Default = Template.bind({});
Default.args = {
  data: data,
  itemPage: 5,
  maxPageNumerLitmit: 10,
  pageNumerLitmit: 10,
  path: "test",
};
