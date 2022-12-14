const router = require("express").Router();
const db = require("../config");

// GET request to render movie reviews
router.get("/reviews", (req, res) => {
    db.query(`
    SELECT movies.movie_name AS movie, reviews.id, reviews.review
    FROM reviews
    LEFT JOIN movies
    ON reviews.movie_id = movies.id
    ORDER BY movies.movie_name;
    `, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

// GET request to render reviews
router.post("/reviews", (req, res) => {
    db.query("INSERT INTO reviews SET ?", req.body, (err, data) => {
        if (err) throw err;
        res.sendStatus(200);
    })
})

// PUT request to update review in reviews database
router.put("/reviews/:id", (req, res) => {
    db.query("UPDATE reviews SET ? WHERE ?", [req.body, { id: req.params.id }], (err, data) => {
        if (err) throw err;
        res.sendStatus(200);
    })
})

module.exports = router