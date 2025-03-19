import express from 'express';
import cors from 'cors';
import venueRouter from './routes/venueRouter.js';
import workshopsRouter from './routes/workshopsRouter.js'

let port = process.env.PORT || 3000

const app = express()

app.use(cors(
    {
    origin: [],
    credentials:true
    }
))

app.use(express.json())

app.use(express.static('public'))
app.use('/venues',venueRouter)
app.use('/workshops', workshopsRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+port)
})