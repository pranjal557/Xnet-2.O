const Router = require('express');

const appRoutes = require('./appserver.routes');

const routes = Router();

routes.use('/', appRoutes);

module.exports = routes;