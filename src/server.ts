import app from "./app.js";
import connectDb from "./config/db.js";

const Port = process.env.PORT || 5000;

const Server = async () => {
  try {
    await connectDb();
    app.listen(Port, () => {
      console.log(`Server running on http://localhost:${Port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

Server();

process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
});
