import express from 'express'
const PORT = 5000

const app = express()

// app.get('/', (req, res) => {
//     res.status(200).json('Сервер работвет111')
// })

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Сервер работвет111')
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))