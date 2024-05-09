import postControllerEstudios from "../../controllers/controllerEstudios/postControllerEstudios";

const postHandlerEstudio = async (req, res) => {
  try {
    const data = req.body;

    const estudioNuevo = await postControllerEstudios(data);

    return res.status(200).json(estudioNuevo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default postHandlerEstudio;
