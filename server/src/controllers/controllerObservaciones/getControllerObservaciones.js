import Observaciones from "../../models/Observaciones";

const getControllerObservaciones = async (
  idUsuario,
  idProyecto,
  idEstudio,
  idExperiencia
) => {
  try {
    const whereConditions = {
      ...(idUsuario && { idUsuario }),
      ...(idProyecto && { idProyecto }),
      ...(idExperiencia && { idExperiencia }),
      ...(idEstudio && { idEstudio }),
    };
    const observaciones = await Observaciones.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    )
      .populate("idEstudio")
      .populate("idExperiencia")
      .populate("idProyecto")
      .populate("idUsuario");
    return observaciones;
  } catch (error) {
    return error;
  }
};

export default getControllerObservaciones;
