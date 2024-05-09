import Experiencia from "../../models/Experiencias";

const putControllerExperiencia = async (dataUpdate, idExperiencia) => {
  try {
    await Experiencia.findByIdAndUpdate(idExperiencia, dataUpdate);
    const experienciaActualizada = await Experiencia.findById(idExperiencia);
    return experienciaActualizada;
  } catch (error) {
    return error;
  }
};

export default putControllerExperiencia;
