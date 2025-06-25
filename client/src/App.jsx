import './index.css';
import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Signup } from './pages/index.js';

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />, // Replace with your actual component for /login
        },
        {
            path: "/signup",
            element: <Signup />, // Replace with your actual component for /signup
        },
    ],
);


export function App() {
    return (
        <>

        </>
    )
}