import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">



          <Typography variant="h6" color="inherit" style={{paddingRight: 10}}>
            Algebrin Scaledrone Chat
          </Typography>
          <span><ChatIcon /></span>
        </Toolbar>
      </AppBar>
    </div>
  );
}