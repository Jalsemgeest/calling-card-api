const Index = require('./controllers/index');
const User = require('./controllers/user');

class Routes {
    static setup(app) {
        // Just to check if it's alive.
        app.get('/', Index.show);

        // GET REQUESTS
        app.get('/user/:guid', User.getByGuid);

        // POST REQUESTS
        app.post('/user/:userId/generate', User.generateGuid);
    }
}

module.exports = Routes;