import express from "express";
import postHandlerEstudio from "../../handlers/handlerEstudio/postHandlerEstudio";
import deleteHandlerEstudio from "../../handlers/handlerEstudio/deleteHandlerEstudio";
import putHandlerEstudio from "../../handlers/handlerEstudio/putHandlerEstudio";
import getHandlerEstudio from "../../handlers/handlerEstudio/getHandlerEstudio";
import authMiddle from "../../middlewares/authMiddleware";
const router = express.Router();

router.post("/", authMiddle, postHandlerEstudio);
router.delete("/:id", authMiddle, deleteHandlerEstudio);
router.put("/:id", authMiddle, putHandlerEstudio);
router.get("/", getHandlerEstudio);

export default router;
