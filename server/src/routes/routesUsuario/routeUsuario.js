import express from "express";
import postHandlerUsuario from "../../handlers/handlerUsuario/postHandlerUsuario";
const router = express.Router();

router.post("/", postHandlerUsuario);
// router.delete('/:id', );
// router.put('/:id', )
// router.get('/', );

export default router;
