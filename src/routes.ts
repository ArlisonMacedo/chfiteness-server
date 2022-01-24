import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import ProductsController from './controllers/ProductsController'


const routes = Router()

const upload = multer(uploadConfig)

routes.post('/product', upload.single('image'), ProductsController.create)
routes.get('/products', ProductsController.index)

export default routes