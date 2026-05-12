import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./Scrolltotop.jsx";

export default function MainLayout() {
 return (
  <div className="min-h-screen bg-white text-slate-900">
   <ScrollToTop/>
   <Navbar />
   <Outlet />
   <Footer />
  </div>
 );
}