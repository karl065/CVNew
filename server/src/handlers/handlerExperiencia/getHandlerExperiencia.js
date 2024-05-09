import Experiencia from "../../models/Experiencias";

const getHandlerExperiencia = async (req, res) => {
  try {
    const {
      id,
      empresa,
      cargo,
      fechaInicioRangoIni,
      fechaInicioRangoFin,
      fechaFinRangoIni,
      fechaFinRangoFin,
      trabajando,
    } = req.query;

    const experiencias = await Experiencia(
      id,
      empresa,
      cargo,
      fechaInicioRangoIni,
      fechaInicioRangoFin,
      fechaFinRangoIni,
      fechaFinRangoFin,
      trabajando
    );

    return res.status(200).json(experiencias);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default getHandlerExperiencia;
