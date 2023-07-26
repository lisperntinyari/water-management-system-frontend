import axios from "axios";
import BASE_URL from "../util/BASE_URL.js";


const getAllHouses = async () => {
    try{
        const data = await axios.get(`${BASE_URL}/houses/all`)
        const houses = data.data.houses
        return houses
    }catch (e){
        console.log("Error fetching houses",e)
        return null

    }
}

export default getAllHouses
