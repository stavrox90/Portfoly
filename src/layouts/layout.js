import React from 'react'
import { Hidden } from '@material-ui/core'
import MobileView from './mobileView'
import DesktopView from './desktopView'

export default function Layout({ children }) {
    return (
        <>
            <Hidden smUp>
                <MobileView>
                    {children}
                </MobileView>
            </Hidden>
            <Hidden xsDown>
                <DesktopView>
                    {children}
                </DesktopView>
            </Hidden>
        </>
    )
}