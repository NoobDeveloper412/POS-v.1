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
  // {
  //   id: "secondmenu",
  //   icon: "iconsminds-three-arrow-fork",
  //   label: "menu.second-menu",
  //   to: "/app/second-menu",
  //   subs: [
  //     {
  //       icon: "simple-icon-paper-plane",
  //       label: "menu.second",
  //       to: "/app/second-menu/second"
  //     }
  //   ]
  // },
  {
    id: "order-design-screen",
    icon: "iconsminds-bucket",
    label: "menu.order-design-screen",
    to: "/app/order-design-screen",
  },
  {
    id: "add-product",
    icon: "iconsminds-add-cart",
    label: "menu.add-product",
    to: "/products/add",
  },
  {
    id: "view-product",
    icon: "iconsminds-shopping-cart",
    label: "menu.view-product",
    to: "/products/view",
  },
];
export default data;
