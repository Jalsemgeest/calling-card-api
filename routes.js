const Index = require('./controllers/index');

class Routes {
    static setup(app) {
        // Just to check if it's alive.
        app.get('/', Index.show);

        // GET REQUESTS
        // app.get('', {Function});

        // POST REQUESTS
        // app.post('', {FUNCTION});
    }
}

module.exports = Routes;