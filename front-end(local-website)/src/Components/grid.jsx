import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from './ExpansionPanel'
import Drawer from './Drawer';
import Table from './Table';
import AddRecord from './Record/AddRecord'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
// const classes = useStyles();
class grid extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movie : [] 
    }
  }
  callbackFunction = (childData) => {
        this.setState({movie: childData})
  }

  render() {
    return (
      <div className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <Drawer/>
          </Grid>
          <Grid item xs={10}>
              <Table/>
          </Grid>
          <Grid item xs={2}>
              <ExpansionPanel/>
          </Grid>
          <Grid item xs={12}>
          <AddRecord/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default grid;