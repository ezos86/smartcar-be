"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get('/', function (req, res) {
    controllers_1.default.cars.getCarList().then(function (response) {
        res.json({ msg: "Cars.", data: response });
    }).catch(function (error) {
        res.json({ msg: "Error getting car list.", error: error });
    });
});
router.get('/:id', function (req, res) {
    controllers_1.default.cars.getCarData(req.params.id).then(function (response) {
        res.json({ msg: "Cars data.", data: response });
    }).catch(function (error) {
        res.json({ msg: "Error getting car data.", error: error });
    });
});
router.post('/', function (req, res) {
    controllers_1.default.cars.addCar(req.body).then(function (response) {
        res.json({ msg: "Car added.", data: response });
    }).catch(function (error) {
        res.json({ msg: "Error adding car", error: error });
    });
});
// Commented out to show return if update was sent.
// router.put('/:id', (req, res) => {
//     controllers.cars.updateCar(req.params.id, req.body).then((response)=>{
//         res.json({msg:"Car updated.", data: response});
//     }).catch((error)=>{
//         res.json({msg:"Error updating car", error:error});
//     });
// });
router.delete('/:id', function (req, res) {
    controllers_1.default.cars.removeCar(req.params.id).then(function (response) {
        res.json({ msg: "Car removed.", data: response });
    }).catch(function (error) {
        res.json({ msg: "Error removing car", error: error });
    });
});
exports.default = router;
//# sourceMappingURL=cars.routes.js.map