import {Request, Response} from 'express'
import connection from '../database/connection'


class ProductsController {
    async index (request: Request, response: Response) {

        const {comercial_name} = request.query

        if(comercial_name){
            const products = await connection('products')
            .whereRaw('LOWER(comercial_name) like ?',[`%${comercial_name}%`])
            .orderBy('created_at', 'desc')
            .select('*')
            const serializeProducts = products.map(product => {
                return {
                    ...product,
                    image_url: `http://localhost:3333/uploads/${product.image}`
                }
            })
    
            return response.json(serializeProducts)
        } else {
            const products = await connection('products')
            .select('*')
            const serializeProducts = products.map(product => {
                return {
                    ...product,
                    image_url: `http://localhost:3333/uploads/${product.image}`
                }
            })
    
            return response.json(serializeProducts)
        }

    }
    async create (request: Request, response: Response){
        const {
            farma_name,
            comercial_name,
            net_weight,
            price,
            type_application,
            formula,
            properties_indications,
            adverse_reactions,
            counter_indications,
            dosage,
            whatsapp
        } = request.body

        const trx = await connection.transaction()

        const product = {
            farma_name,
            comercial_name,
            net_weight,
            price,
            type_application,
            formula,
            properties_indications,
            adverse_reactions,
            counter_indications,
            dosage,
            whatsapp,
            image: request.file?.filename
        }

        await trx('products').insert(product)
        const status = await trx.commit()

        if(!status){
            return response.status(400).json({error: 'Erro na Requisição'})
        }
        return response.status(201).json({status: 'Criado com Sucesso'})
    }
}

export default new ProductsController