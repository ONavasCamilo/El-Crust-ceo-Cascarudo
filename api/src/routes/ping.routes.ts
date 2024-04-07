import { Router } from 'express'
import { pingController } from '../controllers/ping.controller'

const router = Router()

router.get("/", pingController)

export default router