import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layouts/main/Main";
import Booking from "../pages/booking/Booking";
import Home from '../pages/home/Home'
import Login from "../pages/login/Login";
import MyAppointments from "../pages/myAppointments/MyAppointments";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/booking",
                element: <Booking />
            },
            {
                path: "/my-appointments",
                element: <MyAppointments />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },

]);

export default router;