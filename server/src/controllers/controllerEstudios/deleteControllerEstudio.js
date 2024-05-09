import Estudios from "../../models/Estudios";

const deleteControllerEstudio = async (idEstudio) => {
  try {
    const estudioEliminado = await Estudios.findById(idEstudio);

    await Estudios.findByIdAndDelete(idEstudio);

    return estudioEliminado;
  } catch (error) {
    return error;
  }
};

export default deleteControllerEstudio;
