import Experiencia from "../../models/Experiencias";

const getControllerExperiencia = async (
  id,
  empresa,
  cargo,
  fechaInicioRangoIni,
  fechaInicioRangoFin,
  fechaFinRangoIni,
  fechaFinRangoFin,
  trabajando
) => {
  try {
    if (id) {
      const experiencia = await Experiencia.findById(id);
      return experiencia;
    }

    const whereConditions = {
      ...(empresa && { empresa: new RegExp(`^${empresa}`, "i") }),
      ...(cargo && { cargo: new RegExp(`^${cargo}`, "i") }),
      ...(fechaInicioRangoIni &&
        fechaInicioRangoFin && {
          fechaInicio: {
            $gte: fechaInicioRangoIni,
            $lte: fechaInicioRangoFin,
          },
        }),
      ...(fechaInicioRangoIni &&
        !fechaInicioRangoFin && {
          fechaInicio: { $gte: fechaInicioRangoIni },
        }),
      ...(fechaInicioRangoFin &&
        !fechaInicioRangoIni && {
          fechaInicio: { $lte: fechaInicioRangoFin },
        }),
      ...(fechaFinRangoIni &&
        fechaFinRangoFin && {
          fechaVencimiento: {
            $gte: fechaFinRangoIni,
            $lte: fechaFinRangoFin,
          },
        }),
      ...(fechaFinRangoIni &&
        !fechaFinRangoFin && {
          fechaVencimiento: { $gte: fechaFinRangoIni },
        }),
      ...(fechaFinRangoFin &&
        !fechaFinRangoIni && {
          fechaVencimiento: { $lte: fechaFinRangoFin },
        }),
      ...(trabajando && { trabajando }),
    };
    const experiencias = await Experiencia.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    );
    return experiencias;
  } catch (error) {
    return error;
  }
};

export default getControllerExperiencia;
