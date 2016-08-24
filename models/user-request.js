
class User {
    constructor(req) {
        this.GUID = req.params.guid;
    }

    get guid() {
        return this.GUID;
    }

    validate() {
        if (!this.GUID) return false;
        return true;
    }
}

module.exports = User;