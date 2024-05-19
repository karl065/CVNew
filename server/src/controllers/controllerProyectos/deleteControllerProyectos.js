import Proyectos from "../../models/Proyectos";

const deleteControllerProyectos = async (idProyecto) => {
  try {
    const proyectoEliminado = await Proyectos.findById(idProyecto);

    await Proyectos.findByIdAndDelete(idProyecto);

    return proyectoEliminado;
  } catch (error) {
    return error;
  }
};

export default deleteControllerProyectos;
