import express from "express";
import postHandlerProyectos from "../../handlers/handlerProyectos/postHandlerProyectos";
import deleteHandlerProyectos from "../../handlers/handlerProyectos/deleteHandlerProyectos";
import putHandlerProyectos from "../../handlers/handlerProyectos/putHandlerProyectos";
import getHandlerProyectos from "../../handlers/handlerProyectos/getHandlerProyectos";
import authMiddle from "../../middlewares/authMiddleware";
const router = express.Router();

router.post("/", authMiddle, postHandlerProyectos);
router.delete("/:id", authMiddle, deleteHandlerProyectos);
router.put("/:id", authMiddle, putHandlerProyectos);
router.get("/", getHandlerProyectos);

export default router;
