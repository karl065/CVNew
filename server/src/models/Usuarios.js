import mongoose from "mongoose";
import connection from "../config/DB";

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  celular: String,
  foto: String,
  linkedIn: String,
  gitHub: String,
  rol: {
    type: String,
    enum: ["Personal", "Invitado"],
    require: true,
  },
  habilitado: {
    type: Boolean,
    default: true,
    required: true,
  },
  estado: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const UsuarioModel = connection.model("Usuarios", usuarioSchema);

export default UsuarioModel;
