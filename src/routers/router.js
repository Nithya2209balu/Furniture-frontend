import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";

import Contact from "../components/Contact"
import SingleItem from "../components/SingleItem";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";
import UploadBook from "../components/dashboard/Upload";
import Manage from "../components/dashboard/Manage";
import Edit from "../components/dashboard/Edit";
import Login from "../components/Login";
import Signup from "../components/Signup";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Blog from "../components/Blog";



const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
           
            {
                path:'/about',
                element:<Blog/>
            },{
                path:'/contact',
                element:<Contact/>
            },{
                path:'/furniture/:id',
                element:<SingleItem/>,
                loader:({params})=>fetch(`http://localhost:5000/furniture/${params.id}`)
            }
        ]
        
    },
    {
        path:'/shop',
        element:<Shop/>
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element:<PrivateRoute><Dashboard/></PrivateRoute>
 
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            }, {
                path:"/admin/dashboard/manage",
                element:<Manage/>
            },{
                path:"/admin/dashboard/edit-furnitures/:id",
                element:<Edit/>,
                loader:({params})=>fetch(`http://localhost:5000/furniture/${params.id}`)
            }
        ]
    },{
        path:"sign-up",
        element:<Signup/>
    },{
        path:"login",
        element:<Login/>
    },{
        path:"logout",
        element:<Logout/>
    },
    

]);

export default router