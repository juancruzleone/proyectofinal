import { Router } from "express";
import * as controllers from '../controllers/controller.api.auth.js'

const router  = Router()


//Register o crear cuenta
router.post('/auth/register', [], controllers.createCuenta)

router.post('/auth/login', [], controllers.createCuenta)
