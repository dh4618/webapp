const express = require('express')
const app = express()
const cors = require("cors")
const port = 5000
const pool = require("./db");

//middleware
app.use(express.json())
app.use(cors())

//routes

//register and login routes
app.use("/auth", require("./routes/jwtAuth"))

app.use("/myprofile", require("./routes/myProfile"));

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO discussion (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM discussion");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM discussion WHERE id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))