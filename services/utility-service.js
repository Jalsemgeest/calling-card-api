
const guid = require('guid');

class UtilityService {
    static getGuid() {
        return guid.create();
    }
}

module.exports = UtilityService;