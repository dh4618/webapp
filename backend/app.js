const express = require('express')
const app = express()
const cors = require("cors")
const port = 5000

//middleware
app.use(express.json())
app.use(cors())

//routes

//register and login routes
app.use("/auth", require("./routes/jwtAuth"))

app.use("/myprofile", require("./routes/myProfile"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))