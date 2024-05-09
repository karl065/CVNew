import Usuarios from "../../models/Usuarios";

const getControllerUsuario = async (
  id,
  nombre,
  email,
  celular,
  rol,
  estado,
  habilitado,
  obtenerRoles
) => {
  try {
    if (id) {
      const usuario = await Usuarios.findById(id);
      return usuario;
    }
    if (obtenerRoles) {
      const rolesEnum = await Usuarios.schema.path("rol").enumValues;
      return rolesEnum;
    }
    const whereConditions = {
      ...(nombre && { nombre: new RegExp(`^${nombre}`, "i") }),
      ...(email && { email: new RegExp(`^${email}`, "i") }),
      ...(celular && { celular: new RegExp(`^${celular}`, "i") }),
      ...(estado && { estado }),
      ...(habilitado && { habilitado }),
      ...(rol && { rol }),
    };
    const usuarios = await Usuarios.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {},
      { password: 0 }
    );
    return usuarios;
  } catch (error) {
    return error;
  }
};

export default getControllerUsuario;
