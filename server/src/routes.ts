import express from 'express'

const routes = express.Router()
routes.get('/', (request, response) => {
    return response.json({message: 'Teste de Rota'})
})

export default routes