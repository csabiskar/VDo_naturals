import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";
import ProductContextProvider from "./Context/ProductContext";



function App() {

  return (
    <>

    <RouterProvider router={appRouter}>
    <ProductContextProvider/>

    </RouterProvider>

    </>
  );
}

export default App;
