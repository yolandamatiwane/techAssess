import express from 'express'
import { fetchAllWorkshops, fetchAvailableWorkshops, fetchUnavailableWorkshops } from "../controller/workshopController.js"

const router = express.Router()

router.get('/', fetchAllWorkshops)
router.get('/available', fetchAvailableWorkshops)
router.get('/unavailable', fetchUnavailableWorkshops)

export default router