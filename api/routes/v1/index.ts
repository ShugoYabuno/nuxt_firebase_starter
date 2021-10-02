'use strict'

import { Router } from 'express'
import test from './test'

const router = Router()

router.use('/test', test)

/**
 * Routing.
 */
export default router
