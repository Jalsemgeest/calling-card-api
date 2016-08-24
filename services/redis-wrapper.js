
const Redis = require('redis');

class RedisWrapper {
    constructor() {}

    static get connect() {

    }

    static get(key, start = 0, end = -1) {
        let client = Redis.createClient();
        return new Promise((resolve) => {
            client.lrange(key, start, end, resolve);
        });
    }
}

module.exports = RedisWrapper;