const UserRequest = require('../models/user-request');
const GenerateRequest = require('../models/generate-request');
const UtilityService = require('../services/utility-service');
const RedisAccess = require('../data_access/redis-access');

class UserService {
    static getByGuid(req, res) {
        let userRequest = new UserRequest(req);

        console.log(userRequest.guid);

        res.send(`<h1>Hello ${userRequest.guid}</h1>`);
    }

    static generateGuid(req, res) {
        let generateRequest = new GenerateRequest(req);

        if (generateRequest.validate()) {
            let guid = UtilityService.getGuid();

            RedisAccess.getUser(guid).then((response) => {
                console.log(response);
                res.send(guid);
            });
        } else {
            res.status(404).send("Invalid call.");
        }
    }
}

module.exports = UserService;