import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Missing environment variable: MONGODB_URI");

const connectDb = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(`${MONGODB_URI}`);
    console.log(
      `MONGODB connected success: ${ConnectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
    process.exit(1);
  }
};

export default connectDb;
