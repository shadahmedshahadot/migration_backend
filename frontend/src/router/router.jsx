

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <App />,
            },
        ],
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'register',
        element:<Register/>
    }
]);

export default router;
