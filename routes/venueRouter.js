import express from 'express'
import { fetchVenues } from '../controller/venueConroller.js'

const router = express.Router()

router.get('/', fetchVenues)

export default router