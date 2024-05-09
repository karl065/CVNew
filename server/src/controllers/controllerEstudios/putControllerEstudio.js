import Estudios from "../../models/Estudios";

const putControllerEstudio = async (dataUpdate, idEstudio) => {
  try {
    await Estudios.findByIdAndUpdate(idEstudio, dataUpdate);
    const estudioActualizado = await Estudios.findById(idEstudio);
    return estudioActualizado;
  } catch (error) {
    return error;
  }
};

export default putControllerEstudio;
