import Experiencia from "../../models/Experiencias";

const putHandlerExperiencia = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const experienciaActualizada = await Experiencia(dataUpdate, id);

    return res.status(200).json(experienciaActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default putHandlerExperiencia;
