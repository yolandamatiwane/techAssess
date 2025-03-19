import {pool} from '../config/config.js'


const getVenueWorkshopsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM venues');
    for(let venue of data){
        let [workshops] = await pool.query('SELECT * FROM workshops WHERE venue_id = ?', [venue.venue_id]);
        venue.workshops = workshops;
    }
    return data;
}

export {
    getVenueWorkshopsDb
}

