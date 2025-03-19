import express from 'express'
import { fetchAllWorkshops, fetchAvailableWorkshops } from "../controller/workshopController.js"

const router = express.Router()

router.get('/', fetchAllWorkshops)
router.get('/available', fetchAvailableWorkshops)

export default router