import Experiencia from "../../models/Experiencias";

const postHandlerExperiencia = async (req, res) => {
  try {
    const data = req.body;

    const experienciaCreada = await Experiencia(data);

    return res.status(200).json(experienciaCreada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default postHandlerExperiencia;
