const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3591",
    database: "crudgames",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
    // teste - console.log(name);
    let SQL = "insert into game (name, cost, category) values (?,?,?)";

    db.query(SQL, [name, cost, category], (err, result) => {
        console.log(err);
    })
})

app.get("/getCards", (req, res) => {

    let SQL = "select * from game";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "update game set name = ?, cost = ?, category = ? WHERE id = ?";

    db.query(SQL, [name, cost, category, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "Delete from game where id = ?";

    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando");
});

