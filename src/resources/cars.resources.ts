import services from '../services';

const restaurant_resources = {
    
    getCars: async (states, counties, wkt) => {
        services.knex('cars').where('id', id).first().then((resp)=>{
            return resp;
        }).catch((error)=>{
            return error;
        });
    },

    getCar: async (id) => {
        services.knex('cars').where('id', id).first().then((resp)=>{
            return resp;
        }).catch((error) => {
            return error;
        });
    },

    addCar: async (car) => {
        services.knex('cars').insert(car).then((resp)=>{
            return resp;
        }).catch(function(error) {
            return error;
        });
    },

    removeCar: async (car_id) => {
        services.knex('cars').where('id', car_id).del().then((data)=>{
            return resp;
        }).catch(function(error) {
            return error;
        });
    }
}

export default restaurant_resources;