const classesModel = require("../model/classes.model")

module.exports = {
  creatClasses: async (req, res, next) => {
    const teacher_id = req.params.teacher_id;
    const body = req.body;
    body.teacher = teacher_id
    const newClasses = await classesModel.create(body)
    return res.status(201).json(newClasses);
  },
  getClasses: async (req, res, next) => {
    const teacher_id = req.params.teacher_id;
    const teacher = await classesModel.find({
      teacher : teacher_id
    });
    return res.status(200).json(teacher);
  },
  updateClasses: async (req, res, next) => {
    const id = req.params.id
    const body = req.body
    const updateCL = await classesModelModel.findByIdAndUpdate(id, body, { new: true });
    return res.status(200).json(updateCL)
  },
  deleteClasses: async (req, res, next) => {
    const id = req.params.id
    const deleteCl = await classesModelModel.findByIdAndDelete(id);
    return res.status(200).json(deleteCL)

  }

} 