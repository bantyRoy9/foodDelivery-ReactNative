const express = require('express');
const { allRestaurent,createRestaurent } = require('../Controller/restaurent.controller');

const restaurentRouter = express.Router();

restaurentRouter.get('/getAllRestaurent', allRestaurent);
restaurentRouter.post('/createRestaurent', createRestaurent);

module.exports = restaurentRouter;