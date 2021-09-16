import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

// Too many requests
// export const products_url = "https://course-api.com/react-store-products";
export const products_url = [
  {
    id: "32y3grjh3r",
    name: "bath tub",
    price: 309999,
    image:
      "https://images.unsplash.com/photo-1583312994182-94cb3af8b414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,

    colors: ["#ffb900", "#0000ff"],
    company: "ikea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam pariatur quidem labore aliquid vitae earum, dicta vero quas suscipit temporibus?",
    category: "bathroom",
    shipping: true,
  },
];

export const single_product_url = {
  id: "32y3grjh3r",
  name: "bath tub",
  price: 309999,
  images: [
    {
      id: "ugyuf3o4go43",
      url: "https://images.unsplash.com/photo-1583312994182-94cb3af8b414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      filename: "prod-1.jpg",
      size: "12345",
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://images.unsplash.com/photo-1583312994182-94cb3af8b414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          width: 64,
          height: 36,
        },
        large: {
          url: "https://images.unsplash.com/photo-1583312994182-94cb3af8b414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          width: 910,
          height: 512,
        },
        full: {
          url: "https://images.unsplash.com/photo-1583312994182-94cb3af8b414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          width: 3000,
          height: 3000,
        },
      },
    },
    {
      id: "ugyuf3o4go44",
      url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      filename: "prod-1.jpg",
      size: "12345",
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          width: 64,
          height: 36,
        },
        large: {
          url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          width: 910,
          height: 512,
        },
        full: {
          url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          width: 3000,
          height: 3000,
        },
      },
    },
  ],

  colors: ["#ffb900", "#0000ff"],
  company: "ikea",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam pariatur quidem labore aliquid vitae earum, dicta vero quas suscipit temporibus?",
  category: "bathroom",
  shipping: true,
  stock: 5,
  stars: 3.5,
  reviews: 5,
};
