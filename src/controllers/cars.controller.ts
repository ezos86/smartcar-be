import resources from '../resources';

const car_controller = {

    /**
     * @name getCarList
     * @description
     */
    getCarList: async () => {
        resources.cars.getCars().then((cars) => {
            return cars;
        }).catch((error)=>{
            throw Error(error);
        });
    },

    /**
     * @name getCarData
     * @description
     */
    getCarData: async (wktPolygon) => {
        resources.cars.calculateAreaSquareMiles(wktPolygon).then((area_square_miles) => {
            return area_square_miles;
        }).catch((error)=>{
            throw Error(error);
        });
    },

    /**
    * @name addCar
    * @description
    */
    addCar: async (wktPolygon) => {
        resources.cars.calculateAreaSquareMiles(wktPolygon).then((area_square_miles) => {
            return area_square_miles;
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
