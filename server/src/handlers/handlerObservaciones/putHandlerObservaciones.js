import putControllerObservaciones from "../../controllers/controllerObservaciones/putControllerObservaciones";

const putHandlerObservaciones = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const observacionActualizada = await putControllerObservaciones(
      dataUpdate,
      id
    );

    return res.status(200).json(observacionActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default putHandlerObservaciones;
