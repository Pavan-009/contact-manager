const express = require('express');

const {getAllContact,getContact,createContact,updateContact,deleteContact} = require('../ContactController/contactController')

const router = express.Router();

router.route('/').get(getAllContact)

router.route('/:id').get(getContact)

router.route('/').post(createContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;