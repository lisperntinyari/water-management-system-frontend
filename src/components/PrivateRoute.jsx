import {Navigate, Outlet} from "react-router-dom";


const PrivateRoute = () => {
    const user = localStorage.getItem("user")
    const userInfo =JSON.parse(user)
    console.log("User Info: ",userInfo)
    if (userInfo !== null){
        return (<Outlet/>)
    }else {
        return(<Navigate to='/login' replace />)
    }
};
export default PrivateRoute;
