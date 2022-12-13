const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
