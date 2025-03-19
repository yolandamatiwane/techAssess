import {pool} from '../config/config.js'

const getAllWorkshops = async ()=>{
    let [data] = await pool.query(`
        SELECT *
        FROM workshops
        `)

    return data;

}

const getAvailable = async ()=>{
    let [data] = await pool.query(`
        SELECT * 
        FROM workshops
        JOIN venues ON workshops.venue_id= venues.venue_id
        WHERE workshops.seats_available > 0
        `)

    return data
}

const getUnavailable = async ()=>{
    let [data] = await pool.query(`
        SELECT * 
        FROM workshops
        JOIN venues ON workshops.venue_id= venues.venue_id
        WHERE workshops.seats_available = 0
        `)
    return data
}

export {
    getAllWorkshops,
    getAvailable,
    getUnavailable
}