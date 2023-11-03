import * as cuentaSchema from '../schemas/auth.schema.js'

async function validarCuenta(req, res, next) {
    return cuentaSchema.cuenta.validate(req.body, { abortEarly: false, stripUnknown: true })
    .then( (cuenta) => {
        req.body = cuenta
        next()
    } )
    .catch( (err) => res.status(400).json({ error: { message: err.message } }) )
}

export {validarCuenta}