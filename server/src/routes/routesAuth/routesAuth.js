import express from "express";
import handlerAutenticar from "../../handlers/handlerAuth/handlerAutenticar";
import authMiddle from "../../middlewares/authMiddleware";
import handlerAutenticado from "../../handlers/handlerAuth/handlerAutenticado";
import handlerExtenderAutenticado from "../../handlers/handlerAuth/handlerExtenderAutenticado";
const router = express.Router();

router.post("/", handlerAutenticar);
router.get("/", authMiddle, handlerAutenticado);
router.put("/", authMiddle, handlerExtenderAutenticado);

export default router;
