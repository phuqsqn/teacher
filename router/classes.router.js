const express = require("express");
const router = express.Router();

const {
    creatClasses,
    getClasses,
    deleteClasses,
    updateClasses
}= require("../controllers/classes.controller");

router
    .route("/:teacher_id")
    .post(creatClasses)
    .get(getClasses)
router
    .route("/:id")
    .patch(updateClasses)
    .delete(deleteClasses)
module.exports = router;