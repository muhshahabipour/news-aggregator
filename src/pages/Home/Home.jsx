import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const Home = () => {
  return (
    <div className="h-full flex-grow flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col">Home</div>

      <Footer />
    </div>
  );
};

export default Home;
