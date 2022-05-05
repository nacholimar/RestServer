const { request, response } = require('express')
const usuariosGet = (req, res = response) => {
    const { q, nombre = 'No Name', apikey } = req.query;

    res.json({
        msg: 'GET API - controlador',
        q,
        nombre,
        apikey
    })
};

const usuariosPost = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'POST API - controlador',
        nombre,
        edad
    })
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'PUT API - controlador',
        id
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - controlador'
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API - controlador'
    })
};


module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch }