import Proyectos from "../../models/Proyectos";

const getControllerProyectos = async (
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
) => {
  try {
    if (id) {
      const proyecto = await Proyectos.findById(id);
      return proyecto;
    }
    if (obtenerTipos) {
      const tiposEnum = await Proyectos.schema.path("tipo").enumValues;
      return tiposEnum;
    }

    const whereConditions = {
      ...(nombre && { nombre: new RegExp(`^${nombre}`, "i") }),
      ...(cargo && { cargo: new RegExp(`^${cargo}`, "i") }),
      ...(tipo && { tipo }),
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
      ...(finalizado && { finalizado }),
    };
    const proyectos = await Proyectos.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    )
      .populate("idEstudio")
      .populate("idExperiencia")
      .populate("idUsuario")
      .populate("observaciones");
    return proyectos;
  } catch (error) {
    return error;
  }
};

export default getControllerProyectos;
