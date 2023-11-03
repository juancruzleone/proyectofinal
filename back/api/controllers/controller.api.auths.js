import * as services from '../../services/auth.services.js'

const crearCuenta = async () => {
    return services.crearCuenta(req.body)
        .then( () => res.status(201).json({message: "Cuenta credo con éxito"}))
        .catch( (err) => res.status(401).json( {error: (message: err.message)}))
}

const login = async () => {
    return services.crearCuenta(req.body)
        .then( () => res.status(200).json({message: "Cuenta encontrada con éxito"}))
        .catch( (err) => res.status(404).json( {error: (message: err.message)}))
}

export {
    crearCuenta,
    login
}

