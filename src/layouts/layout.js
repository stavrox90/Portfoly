import React from "react";
import { Paper, Hidden } from "@material-ui/core";
import MobileView from "./mobileView";
import DesktopView from "./desktopView";

export default function Layout({ children }) {
  return (
    <>
      <Hidden smUp>
        {/* <Paper square> */}
          <MobileView>{children}</MobileView>
        {/* </Paper> */}
      </Hidden>
      <Hidden xsDown>
        {/* <Paper square> */}
          <DesktopView>{children}</DesktopView>
        {/* </Paper> */}
      </Hidden>
    </>
  );
}
