import express from "express";
import { fetchBookings, createBooking } from "../controller/bookingController.js";

const router = express.Router()

router.get('/', fetchBookings)
router.post('/create', createBooking);

export default router


