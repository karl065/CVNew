import bcryptjs from "bcryptjs";
import Usuarios from "../models/Usuarios";
import jwt from "jsonwebtoken";
const { SECRETA } = process.env;

const autenticarUsuario = async (email, password) => {
  try {
    const usuario = await Usuarios.findOne({
      email: { $regex: new RegExp("^" + email + "$", "i") },
    });
    if (!usuario) {
      throw new Error("Email o Contraseña incorrectos");
    }
    if (!usuario.habilitado) {
      throw new Error(
        `El usuario ${email} esta inhabilitado, por favor contacte a su  administrador`
      );
    }

    const validarPassword = await bcryptjs.compare(password, usuario.password);

    if (!validarPassword) {
      throw new Error("Email o Contraseña incorrectos");
    }
    const usuarioLogeado = await Usuarios.findByIdAndUpdate(
      usuario._id,
      { estado: true },
      { new: true } // Esta opción devuelve el documento actualizado
    ).select("-password");

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
            estado: usuarioLogeado.estado,
            expira: expires,
          };
          resolve(auth);
        }
      ),
    ]);
  } catch (error) {
    throw error.message;
  }
};

export default autenticarUsuario;
