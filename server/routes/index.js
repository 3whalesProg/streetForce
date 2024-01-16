const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const basketRouter = require('./basketRouter')
const likesRouter = require('./likesRouter')
const typeRouter = require('./TypeRouter')


router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/likes', likesRouter)
router.use('/type', typeRouter)

module.exports = router