
const teacherModel = require("../model/teacher.model")

module.exports = {
  creatTeacher: async (req, res, next) => {
    const body = req.body;
    console.log(body);
    const newTeacher = await teacherModel.create(body)
    return res.status(201).json(newTeacher);
  },
  getTeacher: async (req, res, next) => {
    const teachers = await teacherModel.find();
    return res.status(200).json(teachers);
  },
  updateTeacher: async (req, res, next) => {
    const id = req.params.id
    const body = req.body
    const updateTC = await teacherModel.findByIdAndUpdate(id, body, { new: true });
    return res.status(200).json(updateTC)
  },
  deleteTeacher: async (req, res, next) => {
    const id = req.params.id
    const deleteTC = await teacherModel.findByIdAndDelete(id);
    return res.status(200).json(deleteTC)

  }

} 