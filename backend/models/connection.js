const express = require('express');
const mongoose = require('mongoose');

const Connection_schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    answer: {
        type: String,
        required: true
    }


});

const Connection = mongoose.model('quiz', Connection_schema);
module.exports = Connection;