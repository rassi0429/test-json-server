const express = require("express")
const app = express()
const path = require("path")
app.listen(3082, () => console.log("ok"))

app.get("*.json", (req, res) => {
    console.log("access json")
    res.sendFile(path.join(__dirname, "./Box.7zbson"))
})

app.get("*", (req, res) => {
    console.log("access anonimous")
    res.redirect('/foo.json')
})