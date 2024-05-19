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
  certificado: String,
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  proyectos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proyectos",
    },
  ],
  observaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Observaciones",
    },
  ],
});

const ExperienciaModel = connection.model("Experiencia", experienciaSchema);

export default ExperienciaModel;
