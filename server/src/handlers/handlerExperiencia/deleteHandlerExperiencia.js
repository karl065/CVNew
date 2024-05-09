import Experiencia from "../../models/Experiencias";

const deleteHandlerExperiencia = async (req, res) => {
  try {
    const { id } = req.params;

    const experienciaEliminada = await Experiencia(id);

    return res.status(200).json(experienciaEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteHandlerExperiencia;
