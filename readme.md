# API de cadastro de vacinação com javascrit e node.js<br>
<p align="center">
<img src="https://github.com/Letiiciia/API-vacinacao-node.js/blob/master/img/logo.png"/>
</p>

Esta é uma API REST que controla a vacinação entre a população brasileira, o cadatro desse paciente é composto pelos seguintes dados:<br>
### Dados

- [x] Nome da vacina
- [x] Dados pessoais do paciente (nome, email, cpf, data de nascimento e cidade)
- [x] Data do cadastro

### Visualização do Json e Rotas
```json
    [
        {
        "message": "Cadatro realizado com sucesso",
        "cadastro": {
        "id": "60860d67780fd812f869a29f",
        "_id": "60860d67780fd812f869a2a0",
        "nomeVacina": "coronavac",
        "paciente": {
            "nome": "Leticia Lima",
            "email": "leticia@gmail.com",
            "cpf": "05659894469",
            "dataNascimento": "05/09/1998",
            "cidade": "Brasília"
        },
        "data": "2021-04-26T00:46:31.662Z",
        "__v": 0
        }, 
        ...
    ] 
```
| Recurso | Descrição |
| --- | --- |
| `/cadastros` | Retorna lista de pacientes|
<br>
| Recurso | Descrição |
| --- | --- |
| `/criar` | Cria uma ficha do paciente|
<br>
| Recurso | Descrição |
| --- | --- |
| `/delete/id` | Apaga uma ficha por id|
<br>
| Recurso | Descrição |
| --- | --- |
| `/update/id` | Atualiza uma ficha por id|
<br>
### 🛠 Tecnologias e Dependências Utilizadas

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/docs/api.html)
- [Nodemon](https://nodemon.io/)
- [Cors](https://www.npmjs.com/package/cors)
- [Schema](https://schema.org/docs/documents.html)
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Letiiciia/API-vacinacao-node.js.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd API-vacinacao-node.js

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start
# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```
### Estrutura do projeto


```
 📁 api
   |
   |-  📁 src
   |    |  
   |    |- 📁 controller
   |    |- 📁 model
   |    |- 📁 router
   |    |- 📄 app.js
   |
   |- 📄 package.json 
   |- 📄 server.js
```