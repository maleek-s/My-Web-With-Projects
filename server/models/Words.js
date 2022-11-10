const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    synonymWord: {
        type: String,
        required: true,
    },
    percentage: {
        type: String,
        required: true,
    },
});

const WordModel = mongoose.model("words", WordSchema);
module.exports = WordModel;