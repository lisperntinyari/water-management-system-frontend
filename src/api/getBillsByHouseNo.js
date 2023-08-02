import axios from "axios";
import BASE_URL from "../util/BASE_URL.js";


const getBillsByHouseNo = async (houseNo) => {
    try{
        const response = await axios.get(`${BASE_URL}/bills/single?houseNo=${houseNo}`)
        return response.data.bills
    }catch (e){
        console.log(e)
        return null
    }
}


export default getBillsByHouseNo
