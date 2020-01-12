import services from '../services';

const user_resources = {
    
    getUsers: async () => {
        return services.knex('users').then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    },

    getUser: async (id) => {
        services.knex('users').where('id', id).first().then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    },

    addUser: async (user) => {
        services.knex('users').insert(user).then((response)=>{
            return response;
        }).catch(function(error) {
            return error;
        });
    },

    removeUser: async (user_id) => {
        services.knex('users').where('id', user_id).del().then((response)=>{
            return response;
        }).catch(function(error) {
            return error;
        });
    }
}

export default user_resources;