import postControllerProyectos from "../../controllers/controllerProyectos/postControllerProyectos";

const postHandlerProyectos = async (req, res) => {
  try {
    const data = req.body;

    const proyectoNuevo = await postControllerProyectos(data);

    return res.status(200).json(proyectoNuevo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default postHandlerProyectos;
