import { getVenueDb } from "../model/venue.js";

const fetchVenues = async(req,res)=>{
    let venueDb = await getVenueDb();
    res.status(200).json(venueDb)
}


export{
    fetchVenues
}