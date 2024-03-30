//Pages
import AbroadTravel from '../pages/AbroadTravel';
import Main from '../pages/Main';
import TourDeatils from '../pages/TourDetails';
import TravelCheckOut from '../pages/TravelCheckOut';
import VietnamTravel from '../pages/VietnamTravel';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserInfo from '../pages/UserInfo';
import ForgetPassword from '../pages/ForgetPassword';
import DashboardLogin from '../pages/Admin/AdminLogin';
import Dashboard from '../pages/Admin/Dashboard';
import CustomerAdmin from '../pages/Admin/Customer';
import DeleteCustomer from '../pages/Admin/CustomerDelete';
import EmployeeAdmin from '../pages/Admin/Employee';
import DeleteEmployee from '../pages/Admin/EmployeeDelete';
import CreateEmployee from '../pages/Admin/EmployeeCreate';
import EditEmployee from '../pages/Admin/EmployeeEdit';
import TourAdmin from '../pages/Admin/Tour';
import TourCreate from '../components/AdminPages/TourCreate';
import TourEdit from '../components/AdminPages/TourEdit';
import TourDelete from '../components/AdminPages/TourDelete';
import TourDetailsAdmin from '../pages/Admin/TourDetails';
import CreateTourDetails from '../pages/Admin/TourDetailsCreate';
import EditTourDetails from '../pages/Admin/TourDetailsEdit';
import DeleteTourDetails from '../pages/Admin/TourDetailsDelete';
import TourDetailsImageAdmin from '../pages/Admin/TourDetailsImage';
import CreateTourDetailsImage from '../pages/Admin/TourDetailsImageCreate';
import EditTourDetailsImage from '../pages/Admin/TourDetailsImageEdit';
import DeleteTourDetailsImage from '../pages/Admin/TourDetailsImageDelete';

//Routes
const NormalRoutes = [
    { path: '/', component: Main},
    { path: '/vietnamtravel', component: VietnamTravel},
    { path: '/abroadtravel', component: AbroadTravel},
    { path: '/tourdetails', component: TourDeatils},
    { path: '/checkout', component: TravelCheckOut},
    { path: '/userinfo', component: UserInfo},
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
    { path: '/admin/customer', component: CustomerAdmin },
    { path: '/admin/customer/delete', component: DeleteCustomer },
    { path: '/admin/employee', component: EmployeeAdmin },
    { path: '/admin/employee/create', component: CreateEmployee},
    { path: '/admin/employee/delete', component: DeleteEmployee },
    { path: '/admin/employee/edit', component: EditEmployee },
    { path: '/admin/tour', component: TourAdmin },
    { path: '/admin/tour/create', component: TourCreate },
    { path: '/admin/tour/edit', component: TourEdit },
    { path: '/admin/tour/delete', component: TourDelete },
    { path: '/admin/tourdetails', component: TourDetailsAdmin },
    { path: '/admin/tourdetails/create', component: CreateTourDetails },
    { path: '/admin/tourdetails/edit', component: EditTourDetails },
    { path: '/admin/tourdetails/delete', component: DeleteTourDetails },
    { path: '/admin/tourdetailsimage', component: TourDetailsImageAdmin },
    { path: '/admin/tourdetailsimage/create', component: CreateTourDetailsImage },
    { path: '/admin/tourdetailsimage/edit', component: EditTourDetailsImage },
    { path: '/admin/tourdetailsimage/delete', component: DeleteTourDetailsImage },
]

export { NormalRoutes, AuthRoutes, AdminRoutes, AdminAuthRoutes };