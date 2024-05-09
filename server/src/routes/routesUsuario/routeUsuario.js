import express from "express";
import postHandlerUsuario from "../../handlers/handlerUsuario/postHandlerUsuario";
import getHandlerUsuario from "../../handlers/handlerUsuario/getHandlerUsuario";
import putHandlerUsuario from "../../handlers/handlerUsuario/putHandlerUsuario";
import deleteHandlerUsuario from "../../handlers/handlerUsuario/deleteHandlerUsuario";
import authMiddle from "../../middlewares/authMiddleware";
const router = express.Router();

router.post("/", postHandlerUsuario);
router.delete("/:id", authMiddle, deleteHandlerUsuario);
router.put("/:id", authMiddle, putHandlerUsuario);
router.get("/", authMiddle, getHandlerUsuario);

export default router;
