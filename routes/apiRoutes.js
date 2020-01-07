module.exports = function (app, table, waitlist) {// Displays all booked tables
    app.get("/api/tables", function (req, res) {
        return res.json(table);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(waitlist);
    });

    // Create New Reservation - takes in JSON input
    app.post("/api/tables", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newReservation = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

        console.log(newReservation);

        if (table.length >= 5) {
            waitlist.push(newReservation);
            res.json(false);
        } else {
            table.push(newReservation);
            res.json(true);
        }
        // characters.push(newCharacter);

        // res.json(newCharacter);
    });
}