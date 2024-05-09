import Usuario from "../../models/Usuarios";

const getControllerUsuario = async () => {
  try {
    const usuario = await Usuario.find();
    return usuario;
  } catch (error) {
    return error;
  }
};

export default getControllerUsuario;
