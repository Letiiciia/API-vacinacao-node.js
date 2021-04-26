const express = require("express");
const router = express.Router();
const cadastroController = require('../controller/cadastro-vacinaController');

router.get("/cadastros", cadastroController.getCadastrosVacina);
router.post("/criar", cadastroController.criarCadastro);
router.delete("/delete/:id", cadastroController.deleteCadastro);
router.put("/update/:id", cadastroController.updateCadastro);// posso alterar o metodo para patch



module.exports = router;