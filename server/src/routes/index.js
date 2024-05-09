import express from "express";
import usuario from "./routesUsuario/routeUsuario";
import estudio from "./routesEstudio/routeEstudio";
import auth from "./routesAuth/routesAuth";
import experiencia from "./routesExperiencia/";
const router = express.Router();

router.use("/usuario", usuario);
router.use("/estudio", estudio);
router.use("/experiencia", experiencia);
router.use("/auth", auth);

export default router;
