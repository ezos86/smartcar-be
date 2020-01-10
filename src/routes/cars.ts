import { Router } from 'express';
import controllers from '../controllers';
const router = Router();

router.get('/', (req, res) => {
    controllers.cars.getCarList().then((resp) => {
        res.json({msg:"Cars.", data: {'foo': 'bar'}});
    }).catch((error) => {
        res.json({msg:"Cars.", error: error});
    });    
});

router.get('/:id', (req, res) => {
    res.json({msg:"Car data." + req.params.id, data: {'foo': 'bar'}});
});

router.post('/', (req, res) => {
    controllers.cars.addCar(req.body.data).then((resp)=>{
        res.json({msg:"Car added." + req.params.id, data: {'foo': 'bar'}});
    }).catch((error)=>{
        res.json({msg:"Car added." + req.params.id, data: {'foo': 'bar'}});
    });    
});

export default router;