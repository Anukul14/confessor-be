require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models/");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");
const confessionRouter = require("./routers/confessionRouter");

app.use(bodyParser.json({ limit: '5mb' }));
app.use("/api/v1", userRouter);
app.use("/api/v1", confessionRouter);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDB();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
