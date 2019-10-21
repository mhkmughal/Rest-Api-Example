const mongoose = require('mongoose');
const { privateKey } = require('../config/default');

const movieRecord = mongoose.Schema({
    movieName: {
        type: String
    },
    producerName: {
        type: String
    },
    dateRelease: {
        type: Date
    },
    starRating: {
        type: Number,
        required: true
    },
    movieType: {
        type: String,
    }
})


const MovieRecord = mongoose.model('MovieRecord', movieRecord, 'moviesRecord');

exports.MovieRecord = MovieRecord;
