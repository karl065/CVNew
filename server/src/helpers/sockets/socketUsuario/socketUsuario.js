import getControllerUsuario from "../../../controllers/controllerUsuario/getControllerUSuario";

const socketUsuario = (io, socket) => {
  socket.on("login", async (usuario) => {
    socket.nombre = usuario;
    console.log(`El usuario ${socket.nombre} se ha conectado`);
    const usuarios = await getControllerUsuario();
    io.emit("login", usuarios);
  });
};

export default socketUsuario;
