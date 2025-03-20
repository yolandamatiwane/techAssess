import {pool} from '../config/config.js'

const getBookings = async ()=>{
    try {
        const [bookings] = await pool.query(`SELECT * FROM bookings`)
        return bookings;
    } catch (error) {
        console.error('Error fetching bookings:', error)
        throw error;
    }
}

const makeBooking = async (req, res) => {
    const { workshop_id, name } = req.body;

    try {
        // Check if seats are available
        const [seats] = await pool.query(
            'SELECT seats_available FROM workshops WHERE workshop_id = ?',
            [workshop_id]
        );

        if (!seats || seats.length === 0) {
            return res.status(404).json({ error: 'Workshop not found' });
        }

        if (seats[0].seats_available <= 0) {
            return res.status(400).json({ error: 'No seats available' });
        }

        // Insert booking with current timestamp
        await pool.query(
            'INSERT INTO bookings (workshop_id, name, booking_date) VALUES (?, ?, NOW())',
            [workshop_id, name]
        );

        // Decrease seat count
        await pool.query(
            'UPDATE workshops SET seats_available = seats_available - 1 WHERE workshop_id = ?',
            [workshop_id]
        );

        res.json({ message: 'Booking successful' });
    } catch (error) {
        console.error('Error making booking:', error);
        res.status(500).json({ error: 'Database error' });
    }
};


export {
    getBookings,
    makeBooking
}