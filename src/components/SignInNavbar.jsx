import SignInFooter from "./SignInFooter";
import Login from "./Login/Login";
import Navbar from "./Navbar";

export default function SignInNavbar() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
  
      <Navbar/>
      {/* ================= LOGIN / SIGNUP CARD ================= */}
            <Login/>

      <SignInFooter />
    </div>
  );
}
