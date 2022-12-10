const { APIError } = require("../errors/customErrors");
const db= require("../models");

class ConfessionService {
    constructor(){

    }

    postConfession = async(sentFrom, sentTo, confessionText) => {
        try{
            const createConfession = await db.sequelize.query(
                `Insert into confessions (text) values (:confessionText)`,
                {
                    type: db.sequelize.QueryTypes.INSERT,
                    replacements: {
                        confessionText
                    }
                }
            );
            const confessionId= createConfession[0];
            const createMsgRecord = await db.sequelize.query(
                `Insert into confession_record (confession_id,sent_from,sent_to) values (:confessionId,:sentFrom,:sentTo)`,
                {
                    type: db.sequelize.QueryTypes.INSERT,
                    replacements: {
                        confessionId,
                        sentFrom,
                        sentTo
                    }
                }
            );
            return createConfession;
        } catch(error){
            console.log(error);
            throw new APIError("Failed in postConfession service", error);
        }
    }
}

module.exports = new ConfessionService();