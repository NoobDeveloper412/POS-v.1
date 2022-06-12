const data = [
  {
    id: "gogo",
    icon: "iconsminds-air-balloon-1",
    label: "menu.gogo",
    to: "/app/gogo",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.start",
        to: "/app/gogo/start",
      },
    ],
  },
  {
    id: "order",
    icon: "iconsminds-bucket",
    label: "menu.order",
    to: "/order/view",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.createOrder",
        to: "/order/create",
      },
    ],
  },
  {
    id: "product",
    icon: "iconsminds-shopping-cart",
    label: "menu.product",
    to: "/product/view",
    subs: [
      {
        icon: "iconsminds-add-cart",
        label: "menu.addProduct",
        to: "/product/add",
      },
    ],
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow: true,
  },
];
export default data;
