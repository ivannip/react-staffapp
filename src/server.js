"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var compression_1 = require("compression");
var helmet_1 = require("helmet");
var cors_1 = require("cors");
var cookie_parser_1 = require("cookie-parser");
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use((0, compression_1["default"])());
app.use((0, helmet_1["default"])());
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use((0, cookie_parser_1["default"])(process.env.SECRET));
var port = 3000;
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(port, function () {
    console.log("example app list to port: " + port);
});
