import postControllerObservaciones from "../../controllers/controllerObservaciones/postControllerObservaciones";

const postHandlerObservaciones = async (req, res) => {
  try {
    const data = req.body;

    const observacionCreada = await postControllerObservaciones(data);

    return res.status(200).json(observacionCreada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default postHandlerObservaciones;
