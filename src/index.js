const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
const DB_URI=process.env.MONGODB_URL;
const PORT=process.env.PORT;
mongoose
  .connect(DB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((error) => console.log("Failed to connect to DB\n", error));
app.listen(PORT, () => {
    console.log(`Your app listening on port ${PORT}`)
  })
