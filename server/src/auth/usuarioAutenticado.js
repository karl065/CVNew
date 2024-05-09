import Usuarios from "../models/Usuarios";

const usuarioAutenticado = async ({ id }) => {
  try {
    const usuario = await Usuarios.findById(id).select("-password");
    return usuario;
  } catch (error) {
    return error;
  }
};

export default usuarioAutenticado;
