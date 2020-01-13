import services from '../services';

const car_resources = {
    
    getCars: async () => {
        services.knex('cars').then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    },

    getCar: async (car_id) => {
        return services.knex('cars').where({"id":car_id}).first().then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    },

    addCar: async (car) => {
        return services.knex('cars').insert(car).then((response)=>{
            return response;
        }).catch(function(error) {
            return error;
        });
    },

    updateCar: async (car_id, car) => {
        return services.knex('cars').where({ id: car_id }).update(car).then((response)=>{
            return response;
        }).catch((error)=>{
            return error;
        });
    },

    removeCar: async (car_id) => {
        return services.knex('cars').where('id', car_id).del().then((response)=>{
            return response;
        }).catch(function(error) {
            return error;
        });
    }
}

export default car_resources;