import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

import serverConfig from "./src/server.js";
import sockets from "./src/helpers/sockets/sockets.js";

const { httpServer, io } = serverConfig;

httpServer.listen(PORT, async () => {
  console.log(`Server corriendo en el puerto: ${PORT}`);
});
sockets(io);
