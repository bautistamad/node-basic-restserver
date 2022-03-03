
const { Schema, model} = require('mongoose');

const UsuarioSchema =  Schema ({

    nombre: {
        type: String,
        required: [true, 'The name is obligatory']

    },

    email: {
        type: String,
        required: [true, 'The email is obligatory'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'The password is obligatory'],
    },
  
    img: {
        type: String,
    },

    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },

    state: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }
});



module.exports = model( 'Usuario', UsuarioSchema)