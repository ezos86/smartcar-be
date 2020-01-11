"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("./application");
var createMiddleware = require("swagger-express-middleware");
var serverPort = process.env.PORT || 8001;
createMiddleware(__dirname + '/docs/docs.yaml', application_1.default, function (error, middleware) {
    //console.log('wtf', middleware.validateRequest);
    if (error) {
        throw error;
    }
    application_1.default.use(middleware.metadata());
    application_1.default.use(middleware.parseRequest());
    application_1.default.use(middleware.validateRequest());
    application_1.default.use(function (error, req, res, next) {
        res.status(error.status);
        res.send({ message: error.message });
    });
    application_1.default.listen(serverPort, function () {
        console.log("server is listening on " + serverPort);
    });
});
//# sourceMappingURL=index.js.map