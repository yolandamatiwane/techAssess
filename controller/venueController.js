import { getVenueWorkshopsDb } from "../model/venue.js";

const fetchVenues = async(req,res)=>{
    let venueDb = await getVenueWorkshopsDb();
    res.status(200).json(venueDb)
}


export{
    fetchVenues
}