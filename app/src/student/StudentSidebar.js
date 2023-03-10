import React from "react";

import * as RiIcons from "react-icons/ri";

const StudentSidebar = [
  {
    title: "Coordonare lucrare student",
    path: "/student/bachelor",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Vizualizare coordonatori",
        path: "/student/bachelor/coordinators",
      },
      {
        title: "Status cerere",
        path: "/student/bachelor/status",
      },
      {
        title: "Chat coordonator",
        path: "/student/bachelor/chat",
      },
    ],
  },
  {
    title: "Stagiu practic",
    path: "/student/internship",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Informatii generale",
        path: "/student/internship/info",
      },
      {
        title: "Evaluare practica",
        path: "/student/internship/evaluation",
      },
      {
        title: "Chat admin",
        path: "/student/internship/adminchat",
      },
    ],
  },
];

export default StudentSidebar;
