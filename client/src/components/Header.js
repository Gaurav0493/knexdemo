import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const Header = ( ) => {
    return(
        <AppBar>
            <Typography>
                <Toolbar>
                Todo
                </Toolbar>
            </Typography>
        </AppBar>
    );
}

export default Header;