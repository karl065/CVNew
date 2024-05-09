import Usuarios from "../models/Usuarios";
import jwt from "jsonwebtoken";
const { SECRETA } = process.env;

const extenderAutenticado = async ({ id }) => {
  try {
    const usuario = await Usuarios.findById(id);

    const payload = {
      user: {
        id: usuario._id,
      },
    };
    const expires = Math.floor(
      (new Date().getTime() + 24 * 60 * 60 * 1000) / 1000
    );
    return new Promise((resolve, reject) => [
      jwt.sign(
        payload,
        SECRETA,
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) reject({ msg: "Error al crear el token" });
          const auth = {
            token,
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            celular: usuario.celular,
            foto: usuario.foto,
            rol: usuario.rol,
            estado: usuario.estado,
            expira: expires,
          };
          resolve(auth);
        }
      ),
    ]);
  } catch (error) {
    return error;
  }
};

export default extenderAutenticado;
