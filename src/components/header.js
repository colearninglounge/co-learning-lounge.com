import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import SiteNav from './siteNav';

const useStyles = makeStyles(theme => ({

}));



const Header = () => {

  const classes = useStyles();

  return (
  <AppBar position = "fixed" color = "secondary">
    <Toolbar>
      <Box display = "flex" justifyContent = "space-between" width = "100%" >
        <Typography variant="h6">Co-Learning Lounge</Typography>
        <SiteNav/>
      </Box>
    </Toolbar>
  </AppBar>
)}
export default Header
