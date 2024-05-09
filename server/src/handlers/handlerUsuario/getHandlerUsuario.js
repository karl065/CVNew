import getControllerUsuario from "../../controllers/controllerUsuario/getControllerUsuario";

const getHandlerUsuario = async (req, res) => {
  try {
    const {
      id,
      nombre,
      email,
      celular,
      rol,
      estado,
      habilitado,
      obtenerRoles,
    } = req.query;

    const usuarios = await getControllerUsuario(
      id,
      nombre,
      email,
      celular,
      rol,
      estado,
      habilitado,
      obtenerRoles
    );

    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default getHandlerUsuario;
