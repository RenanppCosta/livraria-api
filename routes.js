const express = require("express")
const router = express.Router();
const LivrosController = require("./controllers/LivrosController")

router.get("/", LivrosController.mostrarTodosOsLivros)
router.get("/:id", LivrosController.mostrarLivro)
router.post("/", LivrosController.criar)
module.exports = router