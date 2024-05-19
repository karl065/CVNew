import Proyectos from "../../models/Proyectos";

const putControllerProyectos = async (dataUpdate, idProyecto) => {
  try {
    await Proyectos.findByIdAndUpdate(idProyecto, dataUpdate);
    const proyectoActualizado = await Proyectos.findById(idProyecto);
    return proyectoActualizado;
  } catch (error) {
    return error;
  }
};

export default putControllerProyectos;
