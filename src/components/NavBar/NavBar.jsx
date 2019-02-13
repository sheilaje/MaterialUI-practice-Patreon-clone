import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 14,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

function NavBar(props){
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
             <Toolbar>
               <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                 <MenuIcon />
               </IconButton>
               <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                 Patreon Clone
               </Typography>
               <div className={classes.grow} />
               <div className={classes.search}>
                 <div className={classes.searchIcon}>
                   <SearchIcon />
                 </div>
                 <InputBase
                   placeholder="Find a Creator"
                    classes={{
                     root: classes.inputRoot,
                     input: classes.inputInput,
                   }}
                 />
               </div>
               <Button color="inherit">Start My Page</Button>
               <Button color="inherit">Explore Creators</Button>
               <Button color="inherit">Sign Up</Button>
               <Button color="inherit">Login</Button>
             </Toolbar>
           </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
