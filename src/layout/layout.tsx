import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Outlet/></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
