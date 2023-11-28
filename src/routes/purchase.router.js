const { getAll } = require('../controllers/purchase.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const { create } = require('../controllers/cart.controllers');

const purchaseRouter = express.Router();

purchaseRouter.route('/')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create)
   

module.exports = purchaseRouter;