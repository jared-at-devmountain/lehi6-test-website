import express from 'express'
import ViteExpress from 'vite-express'

let app = express()

app.use(express.json())

app.get('/stuff', (req, res) => {
    res.send([1,2,3,4])
})

ViteExpress.listen(app, 4000, () => {
    console.log('working on 4000')
})