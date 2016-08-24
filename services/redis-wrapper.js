
const Redis = require('redis');

class RedisWrapper {
    constructor() {}

    static set(key, userId) {
        let client = Redis.createClient();
        return new Promise((resolve) => {
            client.set(key, userId);
            client.expireat(key, parseInt((+new Date)/1000) + 86400);
            resolve(userId);
        });
    }

    static get(key) {
        let client = Redis.createClient();
        return new Promise((resolve,reject) => {
            client.get(key, function(err, reply) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(reply);
            });
        });
    }
}

module.exports = RedisWrapper;