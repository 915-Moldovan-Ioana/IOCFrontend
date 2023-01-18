import React from "react";

import * as RiIcons from "react-icons/ri";

const AdminSidebar = [
  {
    title: "Adaugare conturi",
    path: "/admin/accounts/add",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>
  },
  {
    title: "Coordonare lucrare",
    path: "/admin/bachelor",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Posteaza informatii",
        path: "/admin/bachelor/post",
      },
      {
        title: "Situatie studenti",
        path: "/admin/bachelor/student_situation",
      },
      {
        title: "Chat",
        path: "/admin/bachelor/chat",
      },
      {
        title: "Trimitere email",
        path: "/admin/bachelor/email",
      },
      {
        title: "Alocare studenti",
        path: "/admin/bachelor/aloc_students",
      },
    ],
  },
  {
    title: "Stagiu practic",
    path: "/admin/internship",
    className: "nav-text",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Posteaza informatii",
        path: "/admin/internship/post",
      },
      {
        title: "Editeaza criterii practica",
        path: "/admin/internship/edit",
      },
      {
        title: "Vizualizare note",
        path: "/admin/internship/grades",
      },
    ],
  },
];

export default AdminSidebar;
