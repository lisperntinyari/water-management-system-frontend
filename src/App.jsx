import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import TenantDashboardPage from "./pages/TenantDashboardPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<LoginPage/>}
                />
                <Route path="/tenant/dashboard"
                       element={<TenantDashboardPage/>}
                />
                <Route path="/admin/dashboard"
                       element={<AdminDashboardPage/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
