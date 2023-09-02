const express = require("express")

const app = express();
const connectDB = require("./config/data");
const router = require("./router");

app.use(express.json())

router(app);


connectDB();
app.listen(3000, () => {
    console.log("Chạy Thành Công cổng 5000");
})