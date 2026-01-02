import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";
import ProductContextProvider from "./Context/ProductContext";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={appRouter}>
          <ProductContextProvider />
        </RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
