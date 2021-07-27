const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ){
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( correo = '') => {
    // Verificar si el correo existe
    const existeCorreo = await Usuario.findOne({ correo });
    if ( existeCorreo ) {
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}
const existeUsuarioPorId = async( id ) => {
    // Verificar si existe un usuario con el id 
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id ${ id } no existe`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}