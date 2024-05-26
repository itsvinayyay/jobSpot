import mongoose from "mongoose";


const connectWithMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_URL}/${process.env.MONGO_DATABASE_NAME}`
    );

    console.log(
      "Connection established with MongoDB database. Connection Host ID is: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.error("Exception occurred while connecting with MongoDB database");
  }
};

export default connectWithMongoDB;
