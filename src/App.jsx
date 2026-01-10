import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
}

export default App;
