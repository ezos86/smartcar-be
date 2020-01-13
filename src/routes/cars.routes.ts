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
        res.json({msg:"Cars data.", data: response});
    }).catch((error) => {
        res.json({msg:"Error getting car data.", error: error});
    }); 
});

router.post('/', (req, res) => {
    controllers.cars.addCar(req.body).then((response)=>{
        res.json({msg:"Car added.", data: response});
    }).catch((error)=>{
        res.json({msg:"Error adding car", error:error});
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

router.delete('/:id', (req, res) => {
    controllers.cars.removeCar(req.params.id).then((response)=>{
        res.json({msg:"Car removed.", data: response});
    }).catch((error)=>{
        res.json({msg:"Error removing car", error:error});
    });
});

export default router;