
class GenerateRequest {
    constructor(req) {
        this.userId = req.params.userId;
    }

    validate() {
        if (!this.userId) return false;
        return true;
    }
}

module.exports = GenerateRequest;