import axios from "axios";
import BASE_URL from "../util/BASE_URL.js";


const getAllIssues = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/issue/all`)
        return response.data.issues
    }catch (e){
        console.log(e)
        return null
    }
}
export default getAllIssues
