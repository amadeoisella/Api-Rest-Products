import mongoose from "mongoose";

mongoose
  .connect("mongodb://0.0.0.0:27017/apidb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(db => console.log("Db is connected"))
  .catch(error => console.log(error));
