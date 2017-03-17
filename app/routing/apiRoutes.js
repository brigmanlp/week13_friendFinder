//Load Data
var friendsData = require("../data/friends.js");

//Routing
module.exports = function(app) {
    //API Get Request
    //ex: localhost:PORT/api/friends...they are shown the JSON of the friends data
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    //API POST Request
    //this code is for when the user submits their survey form and submits that data to the server.
    //the user submits a JSON object and the JSON is pushed to the appropriate Javascript array
    app.post("/api/friends", function(req, res) {
        // newFriend is the user that filled out the survey
        var newFriend = req.body;

        // compute best match from scores
        var bestMatch = {};

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }
        // compare the scores of newFriend with the scores of each friend in the database 
        //and find the friend with the smallest difference when each set of scores is compared

        var bestMatchIndex = 0;
        //greatest score difference for a question is 4, 
        //therefore greatest difference is 4 times # of questions in survey (4*10=40)
        var bestMatchDifference = 40;

        for (var i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;

            for (var index = 0; index < friendsData[i].scores.length; index++) {
                var differenceOneScore = Math.abs(friendsData[i].scores[index] - newFriend.scores[index]);
                totalDifference += differenceOneScore;
            }

            // if the totalDifference in scores is less than the best match so far
            // save that index and difference
            if (totalDifference < bestMatchDifference) {
                bestMatchIndex = i;
                bestMatchDifference = totalDifference;
            }
        }

        // the best match index is used to get the best match data from the friends index
        bestMatch = friendsData[bestMatchIndex];

        // Put new friend from survey in "database" array
        friendsData.push(newFriend);

        // return the best match friend
        res.json(bestMatch);
    });

};