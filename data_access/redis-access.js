
const Redis = require('../services/redis-wrapper');

class RedisAccess {
    static setUser(guid) {

    }

    static getUser(guid) {
        return Redis.get(guid);
    }
}

function connect() {
    return Redis.createClient();
}

module.exports = RedisAccess;