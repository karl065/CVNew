import mongoose from "mongoose";
import connection from "../config/DB";

const observacionesSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  celular: String,
  observacion: String,
  evidencia: [String],
  idProyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proyectos",
  },
  idEstudio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Estudios",
  },
  idExperiencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experiencia",
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  vista: {
    type: Boolean,
    default: false,
  },
});

const ObservacionesModel = connection.model(
  "Observaciones",
  observacionesSchema
);

export default ObservacionesModel;
