
class GenerateRequest {
    constructor(req) {
        this.userId = req.params.userGuid;
        this.userAuth = req.query.auth;
    }

    validate() {
        if (!this.userId || !this.userAuth) return false;
        return true;
    }
}

module.exports = GenerateRequest;