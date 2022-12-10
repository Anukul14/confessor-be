const userService = require("../services/userService");

class UserController {
    constructor () {
        this.userService= userService;
    }

    getUserByName = async (req,res,next) => {
        try{
            const userName= req.query.user_name;
            const userDetails = await this.userService.getUserByName(userName);
            res.status(200).json({
                user: userDetails
            });
        } catch(e){
            next(e);
        }
    }
}

module.exports = new UserController;