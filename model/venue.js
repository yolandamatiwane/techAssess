import {pool} from '../config/config.js'


const getVenueDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM venues');
    return data;
}

export {
    getVenueDb
}

