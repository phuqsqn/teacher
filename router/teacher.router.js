const express = require("express");
const router = express.Router();

const {
    creatTeacher,
    getTeacher,
    deleteTeacher,
    updateTeacher
}= require("../controllers/teacher.controller");

router
    .route("/")
    .post(creatTeacher)
    .get(getTeacher)
router
    .route("/:id")
    .patch(updateTeacher)
    .delete(deleteTeacher)
module.exports = router;