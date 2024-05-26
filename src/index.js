
import connectWithMongoDB from "./database/mongo.database.js";
import app from "./app.js";

connectWithMongoDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "An Exception occurred while making app listen to the server, ",
      error || "Problem creating the server"
    );
  });
