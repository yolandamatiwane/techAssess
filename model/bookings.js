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
        await pool.query('START TRANSACTION');

        // Check if seats are available
        const [seats] = await pool.query(`SELECT seats_available FROM workshops WHERE workshop_id = ? FOR UPDATE`, [workshop_id]);

        if (!seats || seats.length === 0) {
            // await pool.query('ROLLBACK');
            return res.status(404).json({ error: 'Workshop not found' });
        }

        if (seats[0].seats_available <= 0) {
            // await pool.query('ROLLBACK');
            return res.status(400).json({ error: 'No seats available' });
        }

        // Insert booking
        await pool.query(`INSERT INTO booking (workshop_id, name) VALUES (?, ?)`, [workshop_id, name]);

        // Decrease seat count
        await pool.query(`UPDATE workshops SET seats_available = seats_available - 1 WHERE workshop_id = ?`, [workshop_id]);

        // Commit the transaction
        await pool.query('COMMIT');

        res.json({ message: 'Booking successful' });
    } catch (error) {
        // Rollback the transaction on error
        await pool.query('ROLLBACK');
        console.error('Error making booking:', error);
        res.status(500).json({ error: 'Database error' });
    }
};


export {
    getBookings
}