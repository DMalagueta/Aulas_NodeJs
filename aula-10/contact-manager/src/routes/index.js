const router = require('express').Router();

const detailAction = require('../actions/detail.action');
const formAction = require('../actions/form.action');
const listAction = require('../actions/list.action');
const removeAction = require('../actions/remove.action');
const saveAction = require('../actions/save.action');
const loginAction = require('../actions/login.action')

router.get('/contacts', listAction);
router.get('/contacts/:id', detailAction);
router.get('/contacts/:id/form', formAction);
router.post('/contacts/:id/form', saveAction);
router.get('/contacts/:id/delete', removeAction);
router.get('/login', loginAction)

module.exports = router;