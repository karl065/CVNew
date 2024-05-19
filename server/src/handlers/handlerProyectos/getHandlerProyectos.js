import getControllerProyectos from "../../controllers/controllerProyectos/getControllerProyectos";

const getHandlerProyectos = async (req, res) => {
  try {
    const {
      id,
      nombre,
      cargo,
      tipo,
      fechaInicioRangoIni,
      fechaInicioRangoFin,
      fechaFinRangoIni,
      fechaFinRangoFin,
      finalizado,
      obtenerTipos,
    } = req.query;

    const proyectos = await getControllerProyectos(
      id,
      nombre,
      cargo,
      tipo,
      fechaInicioRangoIni,
      fechaInicioRangoFin,
      fechaFinRangoIni,
      fechaFinRangoFin,
      finalizado,
      obtenerTipos
    );

    return res.status(200).json(proyectos);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default getHandlerProyectos;
