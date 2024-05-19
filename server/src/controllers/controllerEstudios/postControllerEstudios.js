import Estudios from "../../models/Estudios";
import Usuarios from "../../models/Usuarios";

const postControllerEstudios = async (data) => {
  try {
    const estudioCreado = await Estudios.create(data);

    if (data.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        data.idUsuario,
        {
          $push: { estudios: estudioCreado._id },
        },
        { new: true }
      );
    }

    return estudioCreado;
  } catch (error) {
    return error;
  }
};

export default postControllerEstudios;
