const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my-database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Conexión a la base de datos establecida");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;