import services from '../services';

const car_resources = {
    
    getCars: async () => {
        return services.knex('cars').then((response) => {
            console.log('hello', response);
            return response;
        }).catch((error) => {
            return error;
        });
    },

    getCar: async (id) => {
        services.knex('cars').where('id', id).first().then((response) => {
            console.log('hello');
            return response;
        }).catch((error) => {
            return error;
        });
    },

    addCar: async (car) => {
        services.knex('cars').insert(car).then((response)=>{
            return response;
        }).catch(function(error) {
            return error;
        });
    },

    removeCar: async (car_id) => {
        services.knex('cars').where('id', car_id).del().then((response)=>{
            return response;
        }).catch(function(error) {
            return error;
        });
    }
}

export default car_resources;