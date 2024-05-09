import Usuario from "../../models/Usuarios";

const deleteControllerUsuario = async (idUsuario) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(idUsuario);

    return usuarioEliminado;
  } catch (error) {
    return error;
  }
};

export default deleteControllerUsuario;
