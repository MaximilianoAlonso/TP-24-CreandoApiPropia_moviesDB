const router = require('express').Router();

const {list, detail, update, store, destroy} = require('../../controllers/moviesController');


/* /api/v1/movies */
router
    .get('/', list)
    .get('/:id', detail)
    .post('/',store)
    .put('/:id',update)
    .delete('/:id',destroy)


module.exports = router;