const UserRequest = require('../models/user-request');
const GenerateRequest = require('../models/generate-request');
const UtilityService = require('../services/utility-service');
const RedisAccess = require('../data_access/redis-access');

class UserService {
    static getByGuid(req, res) {
        let userRequest = new UserRequest(req);

        if (userRequest.validate()) {
            RedisAccess.getUser(userRequest.guid)
                .then((response) => {
                    res.send(response);
                    return;
                }, (err) => {
                    res.status(404).send(err);
                    return;
                })
        } else {
            res.status(404).send("Invalid call.");
            return;
        }
    }

    static generateGuid(req, res) {
        let generateRequest = new GenerateRequest(req);

        if (generateRequest.validate()) {
            let guid = UtilityService.getGuid();

            RedisAccess.getUser(guid).then((data) => {
                if (!data) {
                    RedisAccess.setUser(guid, generateRequest.userId)
                        .then((data) => {
                            res.send(guid);
                            return;
                        }, (err) => {
                            res.status(404).send(err);
                            return;
                        });
                } else {
                    res.send(guid);
                    return;
                }
            }, (err) => {
                console.log(err);
                res.status(404).send(err);
                return;
            });
        } else {
            res.status(404).send("Invalid call.");
            return;
        }
    }
}

module.exports = UserService;