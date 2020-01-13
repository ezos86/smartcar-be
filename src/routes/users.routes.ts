import { Router } from 'express';
import controllers from '../controllers';
const router = Router();

router.get('/', (req, res) => {
    controllers.users.getUserList().then((response) => {
        res.json({msg:"Users.", data: response});
    }).catch((error) => {
        res.json({msg:"Error getting user list.", error: error});
    });    
});

router.get('/:id', (req, res) => {
    res.json({msg:"User data." + req.params.id, data: {'foo': 'bar'}});
});

router.post('/', (req, res) => {
    controllers.users.addUser(req.body.data).then((response)=>{
        res.json({msg:"User added." + req.params.id, data: response});
    }).catch((error)=>{
        res.json({msg:"Error adding user", error:error});
    });
});

export default router;