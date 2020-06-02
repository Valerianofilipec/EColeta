import express from 'express'

const app = express()

app.get('/server', (req, res) => (
    res.json({"nome": "Valeriano Calológio"})//Testando
))

app.listen(3333)