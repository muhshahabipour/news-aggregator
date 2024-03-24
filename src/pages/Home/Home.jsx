import TopCategories from "./components/TopCategories";
import Trending from "./components/Trending";

const Home = () => {
  return (
    <div className="flex-grow flex flex-col gap-8 px-6">
      <div>
        <Trending />
      </div>

      <div>
        <TopCategories />
      </div>
    </div>
  );
};

export default Home;
