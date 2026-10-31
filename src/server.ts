import app from "./app"

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});

process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
});