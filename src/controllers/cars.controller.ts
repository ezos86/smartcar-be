import resources from '../resources';

const car_controller = {

    /**
    * @name getCarList
    * @description
    */
    getCarList: async () => {
        return resources.cars.getCars().then((cars) => {
            return cars;
        }).catch((error)=>{
            return error;
        });
    },

    /**
    * @name getCarData
    * @description
    */
    getCarData: async (car_id) => {
        resources.cars.getCar(car_id).then((response) => {
            return response;
        }).catch((error)=>{
            throw Error(error);
        });
    },

    /**
    * @name addCar
    * @description
    */
    addCar: async (car_json) => {
        resources.cars.addCar(car_json).then((response) => {
            return response
        }).catch((error)=>{
            throw Error(error);
        });
    },


    /**
    * @name removeCar
    * @description
    */
    removeCar: async (car_id) => {
        resources.cars.removeCar(car_id).then((msg) => {
            return msg;
        }).catch((error)=>{
            throw Error(error);
        });
    }


};

export default car_controller;
