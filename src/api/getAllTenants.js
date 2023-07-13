import axios from "axios";
import BASE_URL from "../util/BASE_URL.js";


const getAllTenants = async () => {
    try{
        const data = await axios.get(`${BASE_URL}/tenant/all`)
        const tenants = data.data.tenants
        return tenants
    }catch (e){
        console.log("Error fetching tenants",e)
        return null

    }
}

export default getAllTenants
