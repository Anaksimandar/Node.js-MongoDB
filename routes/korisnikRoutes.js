const router  = require('express').Router();
const {korisnikDelete,korisnikGet,korisnikInsert,korisnikUpdate} = require('../controlers/korisnikControler');


router.route('/:id').put(korisnikUpdate).delete(korisnikDelete);
router.route('/').get(korisnikGet).post(korisnikInsert);
module.exports = router;