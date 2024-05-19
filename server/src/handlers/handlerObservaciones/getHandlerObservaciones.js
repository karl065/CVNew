import getControllerObservaciones from "../../controllers/controllerObservaciones/getControllerObservaciones";

const getHandlerObservaciones = async (req, res) => {
  try {
    const { idUsuario, idProyecto, idEstudio, idExperiencia } = req.query;

    const observaciones = await getControllerObservaciones(
      idUsuario,
      idProyecto,
      idEstudio,
      idExperiencia
    );

    return res.status(200).json(observaciones);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default getHandlerObservaciones;
