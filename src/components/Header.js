import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll} from 'react-scroll';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar: {
        background: 'none',
    },
    appBarTitle: {
        flexGrow: '1'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    appWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#5AFF3D'
    },
    title: {
        color: '#fff',
        fontSize: '3rem'
    },
    container: {
        textAlign: 'center'
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    }

})
);

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <div className={classes.root} id="header" >
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appWrapper}>
                    <h1 className={classes.appBarTitle}>Solo<span className={classes.colorText}>Island</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked}   collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcome to <br />Solo<span className={classes.colorText}>Island</span></h1>
                    <Scroll to='place-to-visit' smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                    </Scroll>
                  
                </div>
            </Collapse>


        </div>
    );
}

export default Header;