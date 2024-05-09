import deleteControllerEstudio from "../../controllers/controllerEstudios/deleteControllerEstudio";

const deleteHandlerEstudio = async (req, res) => {
  try {
    const { id } = req.params;

    const estudioEliminado = await deleteControllerEstudio(id);

    return res.status(200).json(estudioEliminado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteHandlerEstudio;
