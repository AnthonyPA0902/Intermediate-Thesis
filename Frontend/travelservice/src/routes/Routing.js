//Pages
import AbroadTravel from '../pages/AbroadTravel';
import Main from '../pages/Main';
import TourDeatils from '../pages/TourDetails';
import TravelCheckOut from '../pages/TravelCheckOut';
import VietnamTravel from '../pages/VietnamTravel';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
import DashboardLogin from '../pages/Admin/AdminLogin';
import Dashboard from '../pages/Admin/Dashboard';
import CustomerAdmin from '../pages/Admin/Customer';

//Routes
const NormalRoutes = [
    { path: '/', component: Main},
    { path: '/vietnamtravel', component: VietnamTravel},
    { path: '/abroadtravel', component: AbroadTravel},
    { path: '/tourdetails', component: TourDeatils},
    { path: '/checkout', component: TravelCheckOut},
];

const AuthRoutes = [
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/forget', component: ForgetPassword},
];

const AdminAuthRoutes = [
    { path: '/admin/login', component: DashboardLogin},
];

const AdminRoutes = [
    { path: '/admin/dashboard', component: Dashboard },
    { path: '/admin/dashboard/customer', component: CustomerAdmin },
    
]
export { NormalRoutes, AuthRoutes, AdminRoutes, AdminAuthRoutes };