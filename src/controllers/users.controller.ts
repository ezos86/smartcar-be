import resources from '../resources';

const user_controller = {

    /**
    * @name getUserList
    * @description
    */
    getUserList: async () => {
        return resources.users.getUsers().then((users) => {
            return users;
        }).catch((error)=>{
            return error;
        });
    },

    /**
    * @name getUserData
    * @description
    */
    getUserData: async (user_id) => {
        resources.users.getUser(user_id).then((response) => {
            return response;
        }).catch((error)=>{
            throw Error(error);
        });
    },

    /**
    * @name addUser
    * @description
    */
    addUser: async (user_json) => {
        resources.users.addUser(user_json).then((response) => {
            return response
        }).catch((error)=>{
            throw Error(error);
        });
    },


    /**
    * @name removeUser
    * @description
    */
    removeUser: async (user_id) => {
        resources.users.removeUser(user_id).then((msg) => {
            return msg;
        }).catch((error)=>{
            throw Error(error);
        });
    }


};

export default user_controller;
