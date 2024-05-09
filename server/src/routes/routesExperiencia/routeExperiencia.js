import express from "express";
import postHandlerExperiencia from "../../handlers/handlerExperiencia/postHandlerExperiencia";
import deleteHandlerExperiencia from "../../handlers/handlerExperiencia/deleteHandlerExperiencia";
import putHandlerExperiencia from "../../handlers/handlerExperiencia/putHandlerExperiencia";
import getHandlerExperiencia from "../../handlers/handlerExperiencia/getHandlerExperiencia";
import authMiddle from "../../middlewares/authMiddleware";
const router = express.Router();

router.post("/", authMiddle, postHandlerExperiencia);
router.delete("/:id", authMiddle, deleteHandlerExperiencia);
router.put("/:id", authMiddle, putHandlerExperiencia);
router.get("/", getHandlerExperiencia);

export default router;
