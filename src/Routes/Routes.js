import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <Signup></Signup>
            },
            
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])



export default router