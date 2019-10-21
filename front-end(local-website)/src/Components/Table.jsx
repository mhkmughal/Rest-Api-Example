import React, { Component } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));
 
// const classes = useStyles();
class MovieTable extends Component {
  constructor() {
    super();
    this.state = {
        Movies: []
    }
}
  async componentDidMount() {
    axios.get('http://localhost:3002/moviesRecord/getAllMovies')
      .then((response) => {
        this.setState({ Movies : response.data})
      })
      .catch((error) => {
        console.log(error);
      })
}


  render() {
    return (
      <Paper className={useStyles.root}>
        <Table className={useStyles.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Movie Name</StyledTableCell>
              <StyledTableCell align="right">Producer Name</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
              <StyledTableCell align="right">Date of release</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.Movies.map(movie => (
              <StyledTableRow key={movie._id}>
                <StyledTableCell component="th" scope="row">
                  {movie.movieName}
                </StyledTableCell>
                <StyledTableCell align="right">{movie.producerName}</StyledTableCell>
                <StyledTableCell align="right">{movie.starRating}</StyledTableCell>
                <StyledTableCell align="right">{movie.dateRelease}</StyledTableCell>
                <StyledTableCell align="right">{movie.movieType}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default MovieTable;