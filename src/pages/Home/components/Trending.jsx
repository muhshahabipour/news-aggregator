import Skeleton from "react-loading-skeleton";
import TrendingFirst from "./TrendingFirst";
import TrendingItem from "./TrendingItem";
import { useEffect } from "react";
import useNewsData from "@/hooks/useNewsApiData";

const Trending = () => {
  const { loading, newsData = [] } = useNewsData(null, undefined, 1, 6);

  useEffect(() => {
    if (!loading) console.log(loading);
  }, [newsData, loading]);

  return (
    <div>
      <h1 className="font-bold text-2xl font-mono">Trending</h1>
      <div className="flex flex-col gap-y-4 xl:flex-row mt-6">
        <div className="flex flex-col xl:basis-1/2 xl:pr-2">
          {loading ? <Skeleton /> : <TrendingFirst article={newsData[0]} />}
        </div>
        <div className="flex flex-col gap-y-4 xl:basis-1/2 xl:px-2">
          {newsData.slice(1, 6).map((article) => (
            <TrendingItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
