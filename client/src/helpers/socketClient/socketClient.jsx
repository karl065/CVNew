import io from "socket.io-client";
import server from "../../components/connections/server";

export const socketClient = io(server.api.baseURL, { reconnection: true });
