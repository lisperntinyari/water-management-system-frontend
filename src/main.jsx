import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LoginScreen from "./pages/LoginScreen.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminDashboardScreen from "./pages/AdminDashboardScreen.jsx";
import TenantDashboardScreen from "./pages/TenantDashboardScreen.jsx";
import AllTenantsScreen from "./pages/tenants/AllTenantsScreen.jsx";
import AddTenantScreen from "./pages/tenants/AddTenantScreen.jsx";
import AddBillScreen from "./pages/bills/AddBillScreen.jsx";
import AllBillsScreen from "./pages/bills/AllBillsScreen.jsx";
import DashboardInfo from "./components/DashboardInfo.jsx";
import AllHousesScreen from "./pages/houses/AllHousesScreen.jsx";
import AddHouseScreen from "./pages/houses/AddHouseScreen.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index={true} path='/' element={<HomeScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='' element={<PrivateRoute/>}>
                <Route path='/admin/dashboard' element={<AdminDashboardScreen/>}>
                    <Route index element={<DashboardInfo />} />
                    <Route path="tenants/all" element={<AllTenantsScreen/>}/>
                    <Route path="tenants/add" element={<AddTenantScreen/>}/>

                    <Route path="bills/add" element={<AddBillScreen/>}/>
                    <Route path="bills/all" element={<AllBillsScreen/>}/>

                    <Route path="houses/add" element={<AddHouseScreen/>}/>
                    <Route path="houses/all" element={<AllHousesScreen/>}/>
                </Route>
                <Route path='/tenant/dashboard' element={<TenantDashboardScreen/>}/>
            </Route>
        </Route>
    )
)

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
      </QueryClientProvider>
  </React.StrictMode>,
)
