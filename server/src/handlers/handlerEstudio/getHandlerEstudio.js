import getControllerEstudios from "../../controllers/controllerEstudios/getControllerEstudio";

const getHandlerEstudio = async (req, res) => {
  try {
    const {
      id,
      titulo,
      tipo,
      institucion,
      fechaInicioRangoIni,
      fechaInicioRangoFin,
      fechaFinRangoIni,
      fechaFinRangoFin,
      cursado,
      obtenerTipos,
    } = req.query;

    const estudios = await getControllerEstudios(
      id,
      titulo,
      tipo,
      institucion,
      fechaInicioRangoIni,
      fechaInicioRangoFin,
      fechaFinRangoIni,
      fechaFinRangoFin,
      cursado,
      obtenerTipos
    );

    return res.status(200).json(estudios);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default getHandlerEstudio;
