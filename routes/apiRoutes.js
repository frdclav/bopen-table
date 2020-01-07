module.exports = function (app,table,waitlist) {// Displays all booked tables
    app.get("/api/tables", function (req, res) {
        return res.json(table);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(waitlist);
    });
}