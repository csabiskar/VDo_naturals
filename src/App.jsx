import Home from "./Pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { increment , incrementByAmount} from "./redux/features/counterSlice";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";
import ProductContextProvider from "./Context/ProductContext";



function App() {

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

const test = ()=>{
  dispatch(incrementByAmount(4))
}
  return (
    <>

    <ProductContextProvider>
    <RouterProvider router={appRouter}/>
    </ProductContextProvider>




    {/* <div>
    {count}

    <button onClick={()=>test()}> update</button>
    </div> */}
    </>
  );
}

export default App;
