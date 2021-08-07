import React, { useState } from 'react'
import { AppBar, Container, IconButton,
    makeStyles, Toolbar, Typography,
    Avatar, 
    BottomNavigation,
    BottomNavigationAction} from '@material-ui/core'
import { HomeRounded, PermIdentityRounded, ListAltRounded, ContactsRounded } from '@material-ui/icons'
import avatar from "../components/images/avatar.jpg"
import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => {
    return {
        root: {},
        appBar: {},
        btmAppBar: {
            top: 'auto',
            bottom: 0,
        },
        title: {},
        offset: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        active: {
            backgroundColor: theme.palette.secondary.light
        },
    }
})

function RenderTopBar() {
    const classes = useStyles()
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.offset}/>
                    <Typography>
                        Filus
                    </Typography>
                    <Avatar src={avatar} className={classes.avatar}/>
                </Toolbar>
            </AppBar>
        </>
    )
}

const menus = [
    {
        label: 'Home',
        value: 'home',
        path: '/',
        icon: <HomeRounded/>
    },
    {
        label: 'About',
        value: 'about',
        path: '/about',
        icon: <PermIdentityRounded/>
    },
    {
        label: 'Projects',
        value: 'projects',
        path: '/projects',
        icon: <ListAltRounded/>
    },
    {
        label: 'Contacts',
        value: 'contacts',
        path: '/contacts',
        icon: <ContactsRounded/>
    }
]

function RenderBottomBar() {
    const classes = useStyles()
    const history = useHistory()
    const [value, setValue] = useState('home')

    return (
        <>
            <AppBar position="fixed" className={classes.btmAppBar}>
                <BottomNavigation
                    value={value}
                    // onChange={handleChange}
                    showLabels
                    // className={}
                >
                {
                    menus.map((menu, id) => 
                    <BottomNavigationAction
                        key={id}
                        label={menu.label}
                        value={menu.value}
                        icon={menu.icon}
                        onClick={() => history.push(menu.path)}
                        // className={value == menu.value && classes.active || null}
                    />)
                }
                </BottomNavigation>
            </AppBar>
        </>
    )
}

export default function MobileView({ children }) {
    return (
    <>
        <RenderTopBar/>
            {children}
        <RenderBottomBar/>
    </>
)}