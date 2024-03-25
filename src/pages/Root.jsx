import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-full flex-grow flex flex-col gap-8">
      <Header />

      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
