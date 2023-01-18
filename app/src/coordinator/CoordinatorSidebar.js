import React from "react";
import * as RiIcons from "react-icons/ri";
const CoordinatorSidebar = [
  {
    title: "Coordonare lucrare",
    path: "/coordinator/bachelor",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Editeaza informatii",
        path: "/coordinator/bachelor/edit_info",
      },
      {
        title: "Vizualizare solicitari",
        path: "/coordinator/bachelor/requests",
      },
      {
        title: "Vizualizare studenti",
        path: "/coordinator/bachelor/students",
      },
      {
        title: "Chat studenti",
        path: "/coordinator/bachelor/contacts",
      },
    ],
  },
  {
    title: "Stagiu practic",
    path: "/coordinator/internship",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Vizualizare informatii-WIP",
        path: "/coordinator/internship/info",
      },
      {
        title: "Descarcare rezolvare teme",
        path: "/coordinator/internship/docs",
      },
      {
        title: "Gestionare termene",
        path: "/coordinator/internship/terms",
      },
      {
        title: "Evaluare studenti",
        path: "/coordinator/internship/evaluation",
      },
      {
        title: "Chat admin",
        path: "/coordinator/adminchat",
      }
    ],
  },
];

export default CoordinatorSidebar;
