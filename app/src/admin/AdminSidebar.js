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
        title: "Situatie coordonatori",
        path: "/admin/bachelor/coordinator_situation",
      },
      {
        title: "Chat -WIP",
        path: "/admin/bachelor/chat",
      },
      {
        title: "Trimitere email-WIP",
        path: "/admin/bachelor/email",
      },
      {
        title: "Acorduri de licenta-WIP",
        path: "/admin/bachelor/acc_bachelor",
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
        title: "Situatie studenti",
        path: "/admin/internship/situation",
      },
      {
        title: "Editeaza criterii practica",
        path: "/admin/internship/edit",
      },
      {
        title: "Vizualizare note-WIP",
        path: "/admin/internship/grades",
      },
      {
        title: "Gestionare conturi-WIP",
        path: "/admin/internship/accounts",
      },
    ],
  },
];

export default AdminSidebar;
