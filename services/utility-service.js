
const guid = require('guid');

class UtilityService {
    static getGuid() {
        return guid.create().toString();
    }
}

module.exports = UtilityService;