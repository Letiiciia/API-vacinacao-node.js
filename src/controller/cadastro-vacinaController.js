const vacinaCollection = require("../model/cadastro-vacinaSchema");

const getCadastrosVacina = (request,response) => {
    console.log(request.url);

    vacinaCollection.vacinaCollection.find((error, cadastro) => {
        if(error){
            return response.status(400).send({
                message:"Erro ao trazer as fichas de cadastro de vacina",
                error
        })
        }else{
            return response.status(200).send({
                message:"Todas as fichas de cadastro de vacina",
                cadastro
            })
        }
    })
}

const criarCadastro = (request, response) => {
    console.log(request.url);

    const fromBody = request.body;
    const cadastro = new vacinaCollection.vacinaCollection(fromBody);

    cadastro.save((error, cadastro) => {
        if(error){
            return response.status(404).send({
                message: "Falha ao cadastrar",
                error
            })
        }else{
            return response.status(201).send({
                message: "Cadatro realizado com sucesso",
                cadastro
            })
        }
    })
}

module.exports = {
    getCadastrosVacina,
    criarCadastro
}