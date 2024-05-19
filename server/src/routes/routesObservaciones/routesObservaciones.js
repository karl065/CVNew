import express from "express";
import postHandlerObservaciones from "../../handlers/handlerObservaciones/postHandlerObservaciones";
import getHandlerObservaciones from "../../handlers/handlerObservaciones/getHandlerObservaciones";
import putHandlerObservaciones from "../../handlers/handlerObservaciones/putHandlerObservaciones";
const router = express.Router();

router.post("/", postHandlerObservaciones);
router.put("/", putHandlerObservaciones);
router.get("/", getHandlerObservaciones);

export default router;
