const express = require("express");
const router = express.Router();
const cadastroController = require('../controller/cadastro-vacinaController');

router.get("/cadastros", cadastroController.getCadastrosVacina);



module.exports = router;