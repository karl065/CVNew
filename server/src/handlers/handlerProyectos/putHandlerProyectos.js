import putControllerProyectos from "../../controllers/controllerProyectos/putControllerProyectos";

const putHandlerProyectos = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const proyectoActualizado = await putControllerProyectos(dataUpdate, id);

    return res.status(200).json(proyectoActualizado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default putHandlerProyectos;
