import Usuarios from "../../models/Usuarios";
import bcryptjs from "bcryptjs";

const postControllerUsuario = async (data) => {
  try {
    const verificarEmail = await Usuarios.findOne({ email: data.email });
    if (verificarEmail) {
      throw new Error("Email ya registrado");
    }
    const { password } = data;

    const passCrypt = await bcryptjs.hash(password, 10);

    data.password = passCrypt;

    const usuario = await Usuarios.create(data);

    return usuario;
  } catch (error) {
    throw error;
  }
};

export default postControllerUsuario;
