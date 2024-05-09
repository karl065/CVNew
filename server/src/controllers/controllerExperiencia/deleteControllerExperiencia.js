import Experiencia from "../../models/Experiencias";

const deleteControllerExperiencia = async (idExperiencia) => {
  try {
    const experienciaEliminada = await Experiencia.findById(idExperiencia);

    await Experiencia.findByIdAndDelete(idExperiencia);

    return experienciaEliminada;
  } catch (error) {
    return error;
  }
};

export default deleteControllerExperiencia;
