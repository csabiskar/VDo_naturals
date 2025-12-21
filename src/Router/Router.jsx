import { createBrowserRouter } from "react-router-dom";
import  Home from '../Pages/Home'
import SignIn from "../Pages/SignIn";


export const appRouter = createBrowserRouter([
    {path:'/home',element:<Home/>},
    {path:'/',element:<SignIn />}
])