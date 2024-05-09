import mongoose from "mongoose";
import connection from "../config/DB";

const observacionesSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  finalizado: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const ObservacionesModel = connection.model(
  "Observaciones",
  observacionesSchema
);

export default ObservacionesModel;
