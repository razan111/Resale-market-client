import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../layoyt/Dashboardlayout";
import Main from "../layoyt/Main";
import Advertised from "../pages/Advertised/Advertised";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyDashboard from "../pages/Dashboard/MyDashboard/MyDashboard";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../pages/Dashboard/MyProduct/MyProduct";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import DisplayError from "../pages/Shared/DisplayError/DisplayError";
import Signup from "../pages/Signup/Signup";
import AdminRoutes from "./AdminRoute/AdminRoutes";
import BuyerRoutes from "./BuyerRoutes/BuyerRoutes";
import Privateroute from "./PrivateRoute/Privateroute";
import SellerRoutes from "./SellerRoutes/SellerRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/advertised',
                element: <Advertised></Advertised>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            // {
            //     path: '/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            // },
        ]
    },
    {
        path: '/dashboard',
        element: <Privateroute><Dashboardlayout></Dashboardlayout></Privateroute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyDashboard></MyDashboard>
            },

            {
                path: '/dashboard/myproduct',
                element: <SellerRoutes><MyProduct></MyProduct></SellerRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers/></AdminRoutes>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoutes><MyOrders></MyOrders></BuyerRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])