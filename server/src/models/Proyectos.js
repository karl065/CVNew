import mongoose from "mongoose";
import connection from "../config/DB";

const proyectosSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
  descripcion: String,
  tipo: {
    type: String,
    enum: ["Académico", "Empresarial", "Independiente"],
    required: true,
  },
  fechaInicio: Date,
  fechaFin: Date,
  finalizado: {
    type: Boolean,
    default: false,
    required: true,
  },
  idEstudio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Estudios",
  },
  idExperiencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experiencias",
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  observaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Observaciones",
    },
  ],
  imagenes: [String],
});

const ProyectosModel = connection.model("Proyectos", proyectosSchema);

export default ProyectosModel;
