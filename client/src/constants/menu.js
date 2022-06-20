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
    newWindow: false,
    to: "/order/create",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.createOrder",
        to: "/order/create",
      },
      {
        icon: "iconsminds-order",
        label: "menu.viewOrders",
        to: "/order/view",
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
      {
        icon: "iconsminds-shopping-cart",
        label: "menu.viewProduct",
        to: "/product/view",
      },
    ],
  },
  {
    id: "employees",
    icon: "iconsminds-men",
    label: "menu.employees",
    to: "/employee/view",
    newWindow: false,
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
