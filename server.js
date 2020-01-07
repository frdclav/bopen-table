// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT =  3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)
// =============================================================
var table = [
    {
        "customerName": "rodson",
        "phoneNumber": "1234567898",
        "customerEmail": "f@g.com",
        "customerID": "123"
    }
];

var waitlist = [
    {
        "customerName": "waiting person",
        "phoneNumber": "1234567898",
        "customerEmail": "w@g.com",
        "customerID": "waiting_forever"
    }
];
require("./routes/htmlRoutes.js")(app);
// // HTML Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page

//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "home.html"));
//     });

//     app.get("/tables", function (req, res) {
//         res.sendFile(path.join(__dirname, "tables.html"));
//     });

//     app.get("/reserve", function (req, res) {
//         res.sendFile(path.join(__dirname, "reserves.html"));
//     });

require("./routes/apiRoutes.js")(app,table,waitlist);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});