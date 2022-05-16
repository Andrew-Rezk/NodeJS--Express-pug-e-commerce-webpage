// import required files
const express = require ("express");

//path is a built in node module
const path = require("path");

 // create an express app and store in app variable 
const app = express();

// set up a port number
const port = process.env.PORT || 8888;  


// Set up paths to important files and folders
app.set("views", path.join(__dirname, "views")); //set Express views to use <app_directory>/views
app.set("view engine", "pug");

//set up path for static files (ex. css and client side js)
app.use(express.static(path.join(__dirname, "public")));



// Testing express
/*
app.get("/", (request, response) => {
    response.status(200).send("test3");
});
*/

// set up page routes
app.get("/", (request, response) => {
    response.render("index", { title: "Home" } );
});

// set up server listener
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})