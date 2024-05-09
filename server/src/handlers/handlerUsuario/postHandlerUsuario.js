import postControllerUsuario from "../../controllers/controllerUsuario/postControllerUsuario";

const postHandlerUsuario = async (req, res) => {
  try {
    const usuarioData = req.body;

    const usuario = await postControllerUsuario(usuarioData);

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default postHandlerUsuario;
