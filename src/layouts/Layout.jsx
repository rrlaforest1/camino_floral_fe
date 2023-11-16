import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      {/* If you are logged in display a search bar to search users to talk with */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
