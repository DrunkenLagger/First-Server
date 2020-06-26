const router = require("express").Router();
const admin = require("./adminroutes");
var square = require('./square');
router.use('/adminroutes', admin);
router.use("/square", admin);
module.exports = router