import extenderAutenticado from "../../auth/extenderAutenticado";

const handlerExtenderAutenticado = async (req, res) => {
  try {
    const usuarioToken = req.usuario;
    const usuario = await extenderAutenticado(usuarioToken);
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

export default handlerExtenderAutenticado;
