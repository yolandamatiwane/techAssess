import { getAllWorkshops, getAvailable } from "../model/workshops.js";

const fetchAllWorkshops = async (req, res) => {
    let workshops = await getAllWorkshops();
    res.json(workshops);
}

const fetchAvailableWorkshops = async (req, res) => {
    let availableDb = await getAvailable();
    console.log(availableDb)
    res.status(200).json(availableDb);
}

export{
    fetchAllWorkshops,
    fetchAvailableWorkshops
}