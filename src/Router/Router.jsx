import { createBrowserRouter } from "react-router-dom";
import  Home from '../Pages/Home'
import SignIn from "../Pages/SignIn";
import Wishlist from "../components/Whishlist";
import Error from "../components/Error";


export const appRouter = createBrowserRouter([
    {path:'/',element:<Home/> , errorElement:<Error/>},
    {path:'/signin',element:<SignIn />},
     {path:'/login',element:<SignIn />},
     {path:'/whishlist',element:<Wishlist/>}
])