import Usuario from "../../models/Usuarios";

const putControllerUsuario = async (updateData, idUsuario) => {
  try {
    await Usuario.findByIdAndUpdate(idUsuario, updateData);
    const usuarioActualizado = await Usuario.findById(idUsuario).select(
      "-password"
    );
    return usuarioActualizado;
  } catch (error) {
    return error;
  }
};

export default putControllerUsuario;
