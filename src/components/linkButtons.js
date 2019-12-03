import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root : {
        margin : '0px 8px 0px 8px '
    }
}));   



const SiteNav = () => {

    const classes = useStyles();

    return (
        <Button 
            variant="outlined" 
            color="primary" 
            href="#contained-buttons"
            className = {classes.root}
        >
            {children}
        </Button>
            
    )
}
export default SiteNav;
