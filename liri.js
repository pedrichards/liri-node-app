require("dotenv").config();
// var axios = require("axios");
var fs = require("fs");
//require moment
src = "https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"

var keys = require("./keys.js");

var divider = "\n------------------------------------------------------------\n\n";

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
function findSong(word) {


    // var URL = "https://api.spotify.com/v1/search?query=" + word + "&offset=0&limit=20&type=track";

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    // axios.get(URL, spotify).then(function (response) {
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify(keys.spotify);

    spotify
        .search({ type: 'track', query: word })
        .then(function (response) {
            console.log(response);
            var jsonData = response.tracks.items[0];
            // , {
            //     params: {
            //       fields: "something",
            //       access_token:"8e8e8ee08e0e"  
            //     }
            //   })
            console.log(jsonData.artists);

            // showData ends up being the string containing the show data we will print to the console
            var songData = [
                // Artist(s)
                // The song's name
                // A preview link of the song from Spotify
                // The album that the song is from
                "Artist(s): " + jsonData.artists[0].name,
                "Name: " + jsonData.name,
                "Preview Link " + jsonData.preview_url,
                "Album: " + jsonData.album.name,
            ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            })
        })
        .catch(function (err) {
            console.log(err);
        });
};

//         // Place the response.data into a variable, jsonData.
//         var jsonData = response.data;
//         // , {
//         //     params: {
//         //       fields: "something",
//         //       access_token:"8e8e8ee08e0e"  
//         //     }
//         //   })

//         // showData ends up being the string containing the show data we will print to the console
//         var songData = [
//             // Artist(s)
//             // The song's name
//             // A preview link of the song from Spotify
//             // The album that the song is from
//             "Artist(s)" + jsonData.artists,
//             "Name: " + jsonData.name,
//             "Preview Link " + jsonData.preview_url,
//             "Abum: " + jsonData.album,
//         ].join("\n\n");

//         // Append showData and the divider to log.txt, print showData to the console
//         fs.appendFile("log.txt", actorData + divider, function (err) {
//             if (err) throw err;
//             console.log(songData);
//         });
//     });
// };

function findMovie(word) {
    var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + word + "&countryCode=US&apikey=gCvRPaFA7rJ17s1Du0MBzlUE3vOU0T5Y";

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    axios.get(URL).then(function (response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data[0].person;

        // showData ends up being the string containing the show data we will print to the console
        var movieData = [
            //             Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            "Venue: " + jsonData.name,
            "Location: " + jsonData.gender,
            "Event Date: " + jsonData.birthday,
        ].join("\n\n");

        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", movieData + divider, function (err) {
            if (err) throw err;
            console.log(movieData);
        });
    });
};
function findShow(word) {
    var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + word + "&countryCode=US&apikey=gCvRPaFA7rJ17s1Du0MBzlUE3vOU0T5Y";

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    axios.get(URL).then(function (response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data[0].person;

        // showData ends up being the string containing the show data we will print to the console
        var movieData = [
            //             Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            "Venue: " + jsonData.name,
            "Location: " + jsonData.gender,
            "Event Date: " + jsonData.birthday,
        ].join("\n\n");

        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", movieData + divider, function (err) {
            if (err) throw err;
            console.log(movieData);
        });
    });
};
    // };
    // findShow = function (word) {
    //     var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + word + "&countryCode=US&apikey=gCvRPaFA7rJ17s1Du0MBzlUE3vOU0T5Y";

    //     // Add code to search the TVMaze API for the given actor
    //     // The API will return an array containing multiple actors, just grab the first result
    //     // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    //     // Print this information to the console
    //     axios.get(URL).then(function (response) {
    //         // Place the response.data into a variable, jsonData.
    //         var jsonData = response.data[0].person;

    //         // showData ends up being the string containing the show data we will print to the console
    //         var showData = [
    //             //             Name of the venue
    //             // Venue location
    //             // Date of the Event (use moment to format this as "MM/DD/YYYY")
    //             "Venue: " + jsonData.name,
    //             "Location: " + jsonData.gender,
    //             "Event Date: " + jsonData.birthday,
    //         ].join("\n\n");

    //         // Append showData and the divider to log.txt, print showData to the console
    //         fs.appendFile("log.txt", showData + divider, function (err) {
    //             if (err) throw err;
    //             console.log(showData);
    //         });
    //     });
    // };