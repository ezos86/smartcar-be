import { Router } from 'express';
import controllers from '../controllers';
const router = Router();

router.get('/', (req, res) => {
    controllers.cars.getCarList().then((response) => {
        res.json({msg:"Cars.", data: response});
    }).catch((error) => {
        res.json({msg:"Error getting car list.", error: error});
    });    
});

router.get('/:id', (req, res) => {
    controllers.cars.getCarData(req.params.id).then((response) => {
        res.json({msg:"Cars.", data: response});
    }).catch((error) => {
        res.json({msg:"Error getting car list.", error: error});
    }); 
});

router.post('/', (req, res) => {
    controllers.cars.addCar(req.body.data).then((response)=>{
        res.json({msg:"Car added." + req.params.id, data: response});
    }).catch((error)=>{
        res.json({msg:"Error adding car", error:error});
    });
});

export default router;