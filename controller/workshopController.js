import { getAllWorkshops, getAvailable, getUnavailable } from "../model/workshops.js";

const fetchAllWorkshops = async (req, res) => {
    let workshops = await getAllWorkshops();
    res.json(workshops);
}

const fetchAvailableWorkshops = async (req, res) => {
    let availableDb = await getAvailable();
    console.log(availableDb)
    res.status(200).json(availableDb);
}

const fetchUnavailableWorkshops = async (req, res) => {
    let unavailableDb = await getUnavailable();
    res.status(200).json(unavailableDb);
}

export{
    fetchAllWorkshops,
    fetchAvailableWorkshops,
    fetchUnavailableWorkshops
}