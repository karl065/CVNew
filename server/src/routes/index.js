import express from "express";
import usuario from "./routesUsuario/routeUsuario";
import estudio from "./routesEstudio/routeEstudio";
import auth from "./routesAuth/routesAuth";
import experiencia from "./routesExperiencia/routeExperiencia";
import proyectos from "./routesProyectos/routesProyectos";
import observaciones from "./routesObservaciones/routesObservaciones";
const router = express.Router();

router.use("/usuario", usuario);
router.use("/estudio", estudio);
router.use("/experiencia", experiencia);
router.use("/proyectos", proyectos);
router.use("/observaciones", observaciones);
router.use("/auth", auth);

export default router;
