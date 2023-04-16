const router = require('express').Router();

const {list, detail,update, store, destroy} = require('../../controllers/actorsController');

/* /api/v1/actors */
router
    .get('/', list)
    .get('/:id', detail)
    .post('/',store)
    .put('/:id',update)
    .delete('/:id',destroy)


module.exports = router;