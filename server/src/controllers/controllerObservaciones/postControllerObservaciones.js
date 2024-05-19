import Estudios from "../../models/Estudios";
import Experiencia from "../../models/Experiencia";
import Observaciones from "../../models/Observaciones";
import Proyectos from "../../models/Proyectos";
import Usuarios from "../../models/Usuarios";

const postControllerObservaciones = async (data) => {
  try {
    const observacionCreada = await Observaciones.create(data);
    if (data.idProyecto) {
      await Proyectos.findByIdAndUpdate(
        data.idProyecto,
        {
          $push: { observaciones: observacionCreada._id },
        },
        { new: true }
      );
    }
    if (data.idExperiencia) {
      await Experiencia.findByIdAndUpdate(
        data.idExperiencia,
        {
          $push: { observaciones: observacionCreada._id },
        },
        { new: true }
      );
    }
    if (data.idEstudio) {
      await Estudios.findByIdAndUpdate(
        data.idEstudio,
        {
          $push: { observaciones: observacionCreada._id },
        },
        { new: true }
      );
    }
    if (data.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        data.idUsuario,
        {
          $push: { observaciones: observacionCreada._id },
        },
        { new: true }
      );
    }

    return observacionCreada;
  } catch (error) {
    return error;
  }
};

export default postControllerObservaciones;
