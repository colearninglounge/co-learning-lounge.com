import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root : {
        margin : '0px 8px 0px 8px '
    }
}));

const links = [

]

const SiteNav = () => {

    const classes = useStyles();

    return (
        <Box display="flex">
            <Button  
                variant="outlined" 
                color="primary" 
                href="#contained-buttons"
            >
                Link
            </Button>
            <Button variant="outlined" color="primary" href="#contained-buttons">
                Link
            </Button>
            <Button variant="outlined" color="primary" href="#contained-buttons">
                Link
            </Button>
        </Box>

    )
}
export default SiteNav;
