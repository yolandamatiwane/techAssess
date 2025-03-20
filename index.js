import express from 'express';
import cors from 'cors';
import venueRouter from './routes/venueRouter.js';
import workshopsRouter from './routes/workshopsRouter.js'
import bookingRouter from './routes/bookingsRouter.js'

let port = process.env.PORT || 5000

const app = express()

app.use(cors(
    {
    origin: ['http://localhost:8080'],
    credentials:true
    }
))

app.use(express.json())

app.use(express.static('public'))
app.use('/venues',venueRouter)
app.use('/workshops', workshopsRouter)
app.use('/booking', bookingRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+port)
})