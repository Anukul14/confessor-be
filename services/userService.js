const db = require('../models');
const { APIError} = require('../errors/customErrors');

class UserService {

    constructor(){

    }

    getUserByName = async (userName) => {
        try{
            const userDetails = await db.sequelize.query(
                `select * from user_details where user_name=:userName`,
                {
                    type: db.sequelize.QueryTypes.SELECT,
                    replacements: {
                        userName
                    }
                }
            ); 
            return userDetails;
        } catch(error){
            throw new APIError("Failed in getUserByName", error);
        }
    }



}

module.exports = new UserService();