


const express = require ('express');
const app     = express();
const { exec } = require('node:child_process')

// ####### ##################################//
app.use(express.static(__dirname + "/public"));

app.get('/test', function (req,res) {
    res.send('Hello World');
})

app.get("/", (req, res) => {
    res.sendFile("index.html");
  });



app.get('/exec', (req, res) => {


    // run the `ls` command using exec
exec('ls ./', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
})

app.listen(4100);



