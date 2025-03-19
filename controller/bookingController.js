import { getBookings } from "../model/bookings.js";

const fetchBookings = async(req,res)=>{
    let bookings = await getBookings();
    res.status(200).json(bookings)
}

export{
    fetchBookings
}