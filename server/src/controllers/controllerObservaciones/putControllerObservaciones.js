import Observaciones from "../../models/Observaciones";

const putControllerObservaciones = async (dataUpdate, idObservacion) => {
  try {
    await Observaciones.findByIdAndUpdate(idObservacion, dataUpdate);
    const observacionActualizada = await Observaciones.findById(idObservacion);
    return observacionActualizada;
  } catch (error) {
    return error;
  }
};

export default putControllerObservaciones;
