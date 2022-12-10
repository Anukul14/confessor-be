const confessionService = require("../services/confessionService");
class ConfessionController {
    constructor(){
        this.confessionService = confessionService;
    }

    postConfession = async (req,res,next) => {
        try{
            const {confessionText} = req.body;
            // todo sender and reciever as dynamic 
            
            const createConfession = await this.confessionService.postConfession(1,2,confessionText);
            res.status(200).json({
                success: true
            });
        } catch(error){
            next(error);
        }
    } 
}

module.exports = new ConfessionController();