import putControllerEstudio from "../../controllers/controllerEstudios/putControllerEstudio";

const putHandlerEstudio = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const estudioActualizado = await putControllerEstudio(dataUpdate, id);

    return res.status(200).json(estudioActualizado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default putHandlerEstudio;
