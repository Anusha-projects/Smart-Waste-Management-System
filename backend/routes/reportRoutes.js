const express = require("express");

const router = express.Router();

const {
createReport
}
=
require("../controllers/reportController");

router.post(
"/create",
createReport
);

module.exports = router;