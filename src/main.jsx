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
import AllTenantsScreen from "./components/AllTenantsScreen.jsx";
import AddTenantScreen from "./components/AddTenantScreen.jsx";
import AddBillScreen from "./components/AddBillScreen.jsx";
import AllBillsScreen from "./components/AllBillsScreen.jsx";
import DashboardInfo from "./components/DashboardInfo.jsx";


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
