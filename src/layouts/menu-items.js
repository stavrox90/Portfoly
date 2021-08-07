import {
    HomeRounded,
    PermIdentityRounded,
    ListAltRounded,
    ContactsRounded,
  } from "@material-ui/icons";

const menuItems = [
    {
      label: "Home",
      value: "home",
      path: "/",
      icon: <HomeRounded />,
    },
    {
      label: "About",
      value: "about",
      path: "/about",
      icon: <PermIdentityRounded />,
    },
    {
      label: "Projects",
      value: "projects",
      path: "/projects",
      icon: <ListAltRounded />,
    },
    {
      label: "Contacts",
      value: "contacts",
      path: "/contacts",
      icon: <ContactsRounded />,
    },
  ];

export default menuItems