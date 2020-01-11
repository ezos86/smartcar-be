"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var routes_1 = require("./routes");
var swaggerUi = require('swagger-ui-express');
var YAML = require('yamljs');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === "production") {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    else {
        next();
    }
});
// Docs
var swaggerDocument = YAML.load(__dirname + '/docs/docs.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Route Setup
app.use('/cars', routes_1.default.cars);
exports.default = app;
//# sourceMappingURL=application.js.map