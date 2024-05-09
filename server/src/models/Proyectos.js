import mongoose from "mongoose";
import connection from "../config/DB";

const proyectosSchema = new mongoose.Schema({
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

const ProyectosModel = connection.model("Proyectos", proyectosSchema);

export default ProyectosModel;
