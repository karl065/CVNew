import mongoose from "mongoose";
import connection from "../config/DB";

const experienciaSchema = new mongoose.Schema({
  empresa: String,
  cargo: String,
  funciones: String,
  fechaInicio: Date,
  fechaFin: Date,
  trabajando: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const ExperienciaModel = connection.model("Experiencia", experienciaSchema);

export default ExperienciaModel;
