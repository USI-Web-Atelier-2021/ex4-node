/**
 * Web Atelier 2021  Exercise 4 - JavaScript on the Server-side
 *
 * Student: __STUDENT NAME__
 *
 * Task 3,(4) Web Server
 *
 */

const http = require("http");

//Useful module to work with the file system
//Module needs to be installed with yarn add fs-extra
const fs = require("fs-extra");

//Access command line parameters
let site_path = process.argv[2] || "./public";



function onrequest(request, response) {

//TODO

}
http.createServer(onrequest).listen(8888);

