import Estudios from "../../models/Estudios";

const getControllerEstudios = async (
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
) => {
  try {
    if (obtenerTipos) {
      const tiposEnum = await Estudios.schema.path("tipo").enumValues;
      return tiposEnum;
    }
    if (id) {
      const estudio = await Estudios.findById(id);
      return estudio;
    }

    const whereConditions = {
      ...(titulo && { titulo: new RegExp(`^${titulo}`, "i") }),
      ...(tipo && { tipo }),
      ...(institucion && { institucion: new RegExp(`^${institucion}`, "i") }),
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
      ...(cursado && { cursado }),
    };

    const estudios = await Estudios.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    );
    return estudios;
  } catch (error) {
    return error;
  }
};

export default getControllerEstudios;
