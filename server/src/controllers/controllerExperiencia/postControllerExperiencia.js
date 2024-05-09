import Experiencia from "../../models/Experiencias";

const postControllerExperiencia = async (data) => {
  try {
    const experienciaCreada = await Experiencia.create(data);

    return experienciaCreada;
  } catch (error) {
    return error;
  }
};

export default postControllerExperiencia;
