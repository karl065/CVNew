import Estudios from "../../models/Estudios";

const postControllerEstudios = async (data) => {
  try {
    const estudioCreado = await Estudios.create(data);

    return estudioCreado;
  } catch (error) {
    return error;
  }
};

export default postControllerEstudios;
