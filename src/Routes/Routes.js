import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../layoyt/Dashboardlayout";
import Main from "../layoyt/Main";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyProduct from "../pages/Dashboard/MyProduct/MyProduct";
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
            },

            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/users',
                element: <AllUsers/>
            },
        ]
    }
])