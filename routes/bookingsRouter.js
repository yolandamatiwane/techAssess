import express from "express";
import { fetchBookings } from "../controller/bookingController.js";

const router = express.Router()

router.get('/', fetchBookings)

export default router


