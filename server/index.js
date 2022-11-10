const express = require('express');
const mongoose = require('mongoose');
const WordModel = require('./models/Words');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://maleek-devs:S1ahv5rPylVEVsc7@cluster0.hvameen.mongodb.net/My-Synonym-App?retryWrites=true&w=majority");

// Filling the database

// WordModel.collection.drop();

// const nouns = [
// "time",
// "person",
// "year",
// "way",
// "day",
// "thing",
// "man",
// "world",
// "life",
// "hand",
// "part",
// "child",
// "eye",
// "woman",
// "place",
// "work",
// "week",
// "case",
// "point",
// "government",
// "company",
// "number",
// "group",
// "problem",
// "fact",
// "able",
// "bad",
// "best",
// "better",
// "big",
// "black",
// "certain",
// "clear",
// "different",
// "early",
// "easy",
// "economic",
// "federal",
// "free",
// "full",
// "good",
// "great",
// "hard",
// "high",
// "human",
// "important",
// "international",
// "large",
// "late",
// "little",
// "local",
// "long",
// "low",
// "major",
// "military",
// "national",
// "new",
// "old",
// "only",
// "other",
// "political",
// "possible",
// "public",
// "real",
// "recent",
// "right",
// "small",
// "social",
// "special",
// "strong",
// "sure",
// "true",
// "white",
// "whole",
// "young"
// ]

// const getTermData = async (req, res) => {
//     nouns.forEach(noun =>
//         axios.get(`https://tuna.thesaurus.com/pageData/${noun}`).then((response) => {
//             for (let i = 0; i < response.data.data.definitionData.definitions[0].synonyms[i].term.length; i++) {
//                 const entryRes = response.data.data.definitionData.entry;
//                 console.log(entryRes);
//                 const synonymRes = response.data.data.definitionData.definitions[0].synonyms[i].term;
//                 console.log(synonymRes);
//                 const similarityRes = response.data.data.definitionData.definitions[0].synonyms[i].similarity;
//                 console.log(similarityRes);

//                 axios.post("http://localhost:3001/postWords",
//                     {
//                         word: `${entryRes}`,
//                         synonymWord: `${synonymRes}`,
//                         percentage: `${similarityRes}`
//                     })
//             }
//         }).catch(err => {
//             console.log(err);
//         }));

// }

// getTermData()


app.get("/getWords", (req, res) => {
    WordModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/getSynonym", (req, res) => {
    WordModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/getEventSynonym", (req, res) => {
    WordModel.find({ word: req.query.word, synonymWord: req.query.synonymWord }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/postWords", async (req, res, err) => {
    const newWords =
    {
        word: req.body.word,
        synonymWord: req.body.synonymWord,
        percentage: req.body.percentage
    }
    const newWord = new WordModel(newWords);
    await newWord.save();
    res.json();
})

app.listen(3001, () => {
    console.log("Listening on port 3001")
});
