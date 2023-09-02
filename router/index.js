const teacherRouter = require("./teacher.router");
const classesRouter = require("./classes.router");

module.exports = (app)=>{
    app.use("/api/teachers",teacherRouter);
    app.use("/api/classes",classesRouter)
  
}