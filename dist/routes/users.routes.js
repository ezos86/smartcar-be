"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get('/', function (req, res) {
    controllers_1.default.users.getUserList().then(function (response) {
        res.json({ msg: "Users.", data: response });
    }).catch(function (error) {
        res.json({ msg: "Error getting user list.", error: error });
    });
});
router.get('/:id', function (req, res) {
    res.json({ msg: "User data." + req.params.id, data: { 'foo': 'bar' } });
});
router.post('/', function (req, res) {
    controllers_1.default.users.addUser(req.body.data).then(function (response) {
        res.json({ msg: "User added." + req.params.id, data: response });
    }).catch(function (error) {
        res.json({ msg: "Error adding user", error: error });
    });
});
exports.default = router;
//# sourceMappingURL=users.routes.js.map