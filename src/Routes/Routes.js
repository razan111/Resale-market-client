import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../layoyt/Dashboardlayout";
import Main from "../layoyt/Main";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboardlayout></Dashboardlayout>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])