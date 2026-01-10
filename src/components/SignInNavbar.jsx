import SignInFooter from "./SignInFooter";
import Login from "./Login/Login";
import Navbar from "./Navbar";

export default function SignInNavbar() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* OFFSET for fixed navbar */}
      <div className="pt-[104px] lg:pt-[159px] flex-1">
        <Login />
      </div>

      <SignInFooter />
    </div>
  );
}
