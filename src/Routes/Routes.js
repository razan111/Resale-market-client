import { createBrowserRouter } from "react-router-dom";
import Main from "../layoyt/Main";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])