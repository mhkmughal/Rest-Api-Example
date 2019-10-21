import React, { Component } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import StarRatingComponent from 'react-star-rating-component';
import { Form, Formik, Field } from "formik";
import { FormGroup } from "react-bootstrap";
import axios from 'axios';
import { useAlert } from 'react-alert'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 100,
  },
  button: {
    margin: theme.spacing(1),
    //padding: '0px, 100px'
  },
  input: {
    display: 'none',
  },
}));

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      producerName: '',
      starRating: '',
      dateofRelease : '',
      typeMovie: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onFormSubmit = (e) =>{
    e.preventDefault()
    if(this.state.producerName === "" || this.state.movieName === "" || this.state.starRating === "" || this.state.typeMovie === "" || this.state.dateofRelease === "" ) {
      alert('Fields are empty!!')
    }else {
    axios.post('http://localhost:3002/moviesRecord/addMovieRecord', {
        movieName: `${this.state.movieName}`,
        producerName: `${this.state.producerName}`,
        starRating: `${this.state.starRating}`,
        dateRelease:`${this.state.dateofRelease}`,
        movieType: `${this.state.typeMovie}`
      })
      .then((response) => {
          alert('Successfully Added the record.')
      })
      .catch((error) => {
        alert("Error", error)
      });
    }

  }
  render () {
    return (
      <div>
          <form className={useStyles.container} autof>
        <TextField
          required
          label="MovieName"
          name="movieName"
          className={useStyles.textField}
          onChange={this.handleChange}
          value={this.movieName}
          margin="normal"
        />
        <TextField
          required
          label="ProducerName"
          name="producerName"
          onChange={this.handleChange}
          value={this.producerName}
          className={useStyles.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-date"
          type="date" 
          name="dateofRelease"
          InputLabelProps={{ shrink: true, }}
          onChange={this.handleChange}
          value={this.dateofRelease}
          label="Date of Release"
          className={useStyles.textField}
          margin="normal"
          
        />
        <TextField
          required
          id="standard-date" 
          label="Type of Movie"
          name="typeMovie"
          onChange={this.handleChange}
          value={this.typeMovie}
          className={useStyles.textField}
          margin="normal"
          
        />
        <TextField
          required
          id="standard-rate" 
          label="Rate moivie from 1 to 10"
          name="starRating"
          onChange={this.handleChange}
          value={this.starRating}
          className={useStyles.textField}
          margin="normal"
          
        />
        <br/><br/>
      <Button variant="outlined" type="submit" color="primary" onClick={this.onFormSubmit} className={useStyles.button}>
  Submit
  </Button>
      </form>
  <br/>
  
  
      </div>
    );
  }
  
}

export default MovieForm;