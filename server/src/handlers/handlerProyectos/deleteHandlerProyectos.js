import deleteControllerProyectos from "../../controllers/controllerProyectos/deleteControllerProyectos";

const deleteHandlerProyectos = async (req, res) => {
  try {
    const { id } = req.params;

    const proyectoEliminado = await deleteControllerProyectos(id);

    return res.status(200).json(proyectoEliminado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteHandlerProyectos;
