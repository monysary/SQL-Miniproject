const router = require("express").Router();
const db = require("../config");

// GET request to render movies
router.get("/movies", (req, res) => {
    db.query("SELECT * FROM movies", (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

// POST request to add a movie to movies database
router.post("/movies", (req, res) => {
    db.query("INSERT INTO movies SET ?", req.body, (err, data) => {
        if (err) throw err;
        res.sendStatus(200);
    })
})

// DELETE request to remove a movie from movies database
router.delete("/movies/:id", (req, res) => {
    db.query("DELETE FROM movies WHERE ?", { id: req.params.id}, (err, data) => {
        if (err) throw err;
        res.sendStatus(200);
    })
})

module.exports = router