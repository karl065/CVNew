import express from "express";
import http from "http";
import socketIO from "socket.io";
import router from "./routes";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import fileUpload from "express-fileupload";

const server = express();
const httpServer = http.createServer(server); // Crea un servidor HTTP
const io = socketIO(httpServer, {
  cors: {
    origin: "*", // Ajusta según tu configuración de React
    methods: ["GET", "POST"],
  },
}); // Crea una instancia de Socket.io

server.use(morgan("dev"));
server.use(express.json());
server.use(helmet());

// Cross-Origin-Opener-Policy configuration
server.use(
  helmet.crossOriginOpenerPolicy({
    policy: "same-origin-allow-popups",
  })
);

server.use(cors());
server.use(fileUpload({ useTempFiles: true }));

server.use(router);

export default { server, httpServer, io };
