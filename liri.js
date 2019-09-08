require("dotenv").config();
//require moment
src = "https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"

var keys = require("./keys.js");

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
    search = "concert-this";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
    term = "U2";
}

if (search === "concert-this") {
    findShow(term);

}
if (search === "spotify-this-song") {
    findSong(term);


}
if (search === "movie-this") {
    findMovie(term);

}
if (search === "do-what-it-says") {
    doWhat(term);

}
// var spotify = new Spotify(keys.spotify);
findShow = function (term) {
    var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + term + "&countryCode=US&apikey=gCvRPaFA7rJ17s1Du0MBzlUE3vOU0T5Y";

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    axios.get(URL).then(function (response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data[0].person;

        // showData ends up being the string containing the show data we will print to the console
        var showData = [
            //             Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            "Venue: " + jsonData.name,
            "Location: " + jsonData.gender,
            "Event Date: " + jsonData.birthday,
        ].join("\n\n");

        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", actorData + divider, function (err) {
            if (err) throw err;
            console.log(actorData);
        });
    });




};

findSong = function (term) {
    var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + term + "&countryCode=US&apikey=gCvRPaFA7rJ17s1Du0MBzlUE3vOU0T5Y";

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    axios.get(URL).then(function (response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data[0].person;

        // showData ends up being the string containing the show data we will print to the console
        var showData = [
            //             Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            "Venue: " + jsonData.name,
            "Location: " + jsonData.gender,
            "Event Date: " + jsonData.birthday,
        ].join("\n\n");

        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", actorData + divider, function (err) {
            if (err) throw err;
            console.log(actorData);
        });
    });




};
// };