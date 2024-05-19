import Estudios from "../../models/Estudios";
import Experiencia from "../../models/Experiencias";
import Proyectos from "../../models/Proyectos";
import Usuarios from "../../models/Usuarios";

const postControllerProyectos = async (data) => {
  try {
    const proyectoNuevo = await Proyectos.create(data);

    if (data.idExperiencia) {
      await Experiencia.findByIdAndUpdate(
        data.idExperiencia,
        {
          $push: { proyectos: proyectoNuevo._id },
        },
        { new: true }
      );
    }
    if (data.idEstudio) {
      await Estudios.findByIdAndUpdate(
        data.idEstudio,
        {
          $push: { proyectos: proyectoNuevo._id },
        },
        { new: true }
      );
    }
    if (data.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        data.idUsuario,
        {
          $push: { proyectos: proyectoNuevo._id },
        },
        { new: true }
      );
    }

    return proyectoNuevo;
  } catch (error) {
    return error;
  }
};

export default postControllerProyectos;
