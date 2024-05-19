import mongoose from "mongoose";
import connection from "../config/DB";

const estudiosSchema = new mongoose.Schema({
  titulo: String,
  tipo: {
    type: String,
    enum: [
      "Preescolar",
      "Primaria",
      "Secundaria",
      "Técnico",
      "Tecnólogo",
      "Profesional Universitario",
      "Especialización",
      "Maestría",
      "Doctorado",
      "Técnico Laboral",
      "Curso",
    ],
    required: true,
  },
  institucion: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  cursando: {
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

const EstudiosModel = connection.model("Estudios", estudiosSchema);

export default EstudiosModel;
