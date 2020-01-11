"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get('/', function (req, res) {
    controllers_1.default.cars.getCarList().then(function (response) {
        console.log('hiiii', response);
        res.json({ msg: "Cars.", data: response });
    }).catch(function (error) {
        res.json({ msg: "Error getting car list.", error: error });
    });
});
router.get('/:id', function (req, res) {
    res.json({ msg: "Car data." + req.params.id, data: { 'foo': 'bar' } });
});
router.post('/', function (req, res) {
    controllers_1.default.cars.addCar(req.body.data).then(function (response) {
        res.json({ msg: "Car added." + req.params.id, data: response });
    }).catch(function (error) {
        res.json({ msg: "Error adding car", error: error });
    });
});
exports.default = router;
//# sourceMappingURL=cars.routes.js.map