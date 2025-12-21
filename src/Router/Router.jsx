import { createBrowserRouter } from "react-router-dom";
import  Home from '../Pages/Home'
import SignIn from "../Pages/SignIn";


export const appRouter = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/signin',element:<SignIn />},
     {path:'/login',element:<SignIn />}
])