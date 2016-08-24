
class User {
    constructor(req) {
        this.GUID = req.params.guid;

    }

    get guid() {
        return this.GUID;
    }
}

module.exports = User;