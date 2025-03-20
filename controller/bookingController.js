import { getBookings, makeBooking } from "../model/bookings.js";

const fetchBookings = async (req, res) => {
    try {
        let bookings = await getBookings();
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};

const createBooking = async (req, res) => {
    try {
        await makeBooking(req, res);
    } catch (error) {
        console.error("Error in createBooking controller:", error);
    }
};

export {
    fetchBookings,
    createBooking,
};