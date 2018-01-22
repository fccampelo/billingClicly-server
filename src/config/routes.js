const express = require('express')
const router = express.Router();
const billingCicly = require('../api/billingCycle/billingCycleService')

module.exports = function (server) {
  server.use('/api', router);
  billingCicly.register(router, '/billingCycles')
};