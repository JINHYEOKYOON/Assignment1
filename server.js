var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send(/*
*  WEB322 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __JINHYEOK YOON____________________ Student ID: __145283206
____________ Date: _______2022,09,14_________
*
*  Online (Cyclic) URL:  https://cautious-attire-jay.cyclic.app
*
********************************************************************************/ 
"Jinhyeok Yoon - 145283206"

;
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
