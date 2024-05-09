import express from "express";
import usuario from "./routesUsuario/routeUsuario";
import auth from "./routesAuth/routesAuth";
const router = express.Router();

router.use("/usuario", usuario);
router.use("/auth", auth);

export default router;
