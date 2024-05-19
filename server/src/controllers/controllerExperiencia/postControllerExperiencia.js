import Experiencia from "../../models/Experiencias";
import Usuarios from "../../models/Usuarios";

const postControllerExperiencia = async (data) => {
  try {
    const experienciaCreada = await Experiencia.create(data);

    if (data.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        data.idUsuario,
        {
          $push: { experiencias: experienciaCreada._id },
        },
        { new: true }
      );
    }

    return experienciaCreada;
  } catch (error) {
    return error;
  }
};

export default postControllerExperiencia;
