function findShow(word) {
    var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + word + "&countryCode=US&apikey=gCvRPaFA7rJ17s1Du0MBzlUE3vOU0T5Y";

    // Add code to search the API
    axios.get(URL).then(function (response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data._embedded.events;
        console.log(jsonData);
        for (var i = 0; i < data.tracks.items.length; i++) {

            // showData ends up being the string containing the show data we will print to the console
            var showData = [
                //             Name of the venue
                // Venue location
                // Date of the Event (use moment to format this as "MM/DD/YYYY")
                "Venue: " + jsonData.venue[i],
                "Location: " + jsonData.location[i],
                "Event Date: " + jsonData.date[i],
            ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
            fs.appendFile("log.txt", showData + divider, function (err) {
                if (err) throw err;
                console.log(showData);
            });
        }
    });
};