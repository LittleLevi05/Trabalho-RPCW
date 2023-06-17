/*
  Módulo home.js
*/

var express = require('express');
var router = express.Router();
var auth = require('../helpers/auth')

/*
  descrição: renderiza a página home da aplicação
*/
router.get('/', auth.verificaAcessoSocioOuDiretor, function(req, res, next) {
    nivelAcesso = auth.getNivelDeAcesso(req.cookies.token)
    idUtilizador = auth.getID(req.cookies.token)
    res.render('home', {nivelAcesso:nivelAcesso,idUtilizador:idUtilizador})
})

module.exports = router