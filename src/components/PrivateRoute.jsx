import {Navigate, Outlet} from "react-router-dom";
import Constants from "../util/Constants.js";
import {useEffect} from "react";

function getTenantData(){
    const user = localStorage.getItem("tenant")
    const userInfo =JSON.parse(user)
    return userInfo
}
function getAdminData(){
    const user = localStorage.getItem("admin")
    const userInfo =JSON.parse(user)
    return userInfo
}
const tenantData = getTenantData()
const adminData = getAdminData()
const PrivateAdminRoute = () => {

    const user = localStorage.getItem("admin")
    const userInfo =JSON.parse(user)
    console.log("User Info: ",userInfo)
    if (userInfo !== null && userInfo.authType === Constants.ADMIN){
        return (<Outlet/>)
    }else {
        return(<Navigate to='/login' replace />)
    }
};

const PrivateTenantRoute = () => {
    const user = localStorage.getItem("tenant")
    const userInfo =JSON.parse(user)
    console.log("User Info: ",userInfo)
    if (userInfo !== null && userInfo.authType === Constants.TENANT){
        return (<Outlet/>)
    }else {
        return(<Navigate to='/login' replace />)
    }
}
export { PrivateAdminRoute,PrivateTenantRoute,adminData,tenantData }
