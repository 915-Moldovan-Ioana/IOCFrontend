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
        title: "Chat",
        path: "/coordinator/bachelor/chat",
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
        title: "Vizualizare informatii",
        path: "/coordinator/internship/info",
      },
      {
        title: "Incarca documente",
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
        title: "Chat",
        path: "/coordinator/internship/chat",
      },
    ],
  },
];

export default CoordinatorSidebar;
