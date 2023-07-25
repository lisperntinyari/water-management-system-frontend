import axios from "axios";
import BASE_URL from "../util/BASE_URL.js";


const getAllBills = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/bills/all`)
        return response.data.bills
    }catch (e){
        console.log(e)
        return null
    }
}


export default getAllBills
