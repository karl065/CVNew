import socketUsuario from "./socketUsuario/socketUsuario";

const sockets = (io) => {
  io.on("connection", async (socket) => {
    console.log(`El cliente ${socket.id} se ha conectado`);
    socketUsuario(io, socket);

    socket.on("disconnect", () => {
      console.log(`El cliente ${socket.id} se ha desconectado.`);
    });
  });
};

export default sockets;
