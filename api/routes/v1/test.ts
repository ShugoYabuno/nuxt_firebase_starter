import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  try {
    res.status(200)
    return res.json({
      message: 'success'
    })
  } catch (e) {
    console.log(e)
    res.status(400)
    return res.json({})
  }
})

export default router
