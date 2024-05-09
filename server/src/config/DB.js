import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const { DB } = process.env;

const mongoOptions = {
  maxPoolSize: 200,
  maxConnecting: 200,
};

const connection = mongoose.createConnection(DB, mongoOptions);

connection.on("connected", () => {
  console.log("MongoDB Conectado");
});

connection.on("error", (error) => {
  console.log("Error en la conexión", error);
});

export default connection;
