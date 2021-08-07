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
        }
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
        icon: <HomeRounded/>
    },
    {
        label: 'About',
        value: 'about',
        icon: <PermIdentityRounded/>
    },
    {
        label: 'Projects',
        value: 'projects',
        icon: <ListAltRounded/>
    },
    {
        label: 'Contacts',
        value: 'contacts',
        icon: <ContactsRounded/>
    }
]

function RenderBottomBar() {
    const classes = useStyles()
    // const history = useHistory()
    // const location = useLocation()
    const [value, setValue] = useState('home')

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <AppBar position="fixed" className={classes.btmAppBar}>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
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
        <h1>Mobile View</h1>
        <RenderBottomBar/>
    </>
)}