import ArticleBrief from "@/components/Feeds/ArticleBrief";
import TrendingFirst from "./TrendingFirst";
import useNewsData from "@/hooks/useNewsApiData";

const Trending = () => {
  const { loading, newsData = [] } = useNewsData(null, undefined, 1, 6);

  return (
    <div>
      <h1 className="font-bold text-2xl font-mono">Trending</h1>
      <div className="flex flex-col gap-y-4 xl:flex-row mt-6">
        <div className="flex flex-col xl:basis-1/2 xl:pr-2">
          <TrendingFirst article={newsData[0]} loading={loading} />
        </div>
        <div className="flex flex-col gap-y-4 xl:basis-1/2 xl:px-2">
          {loading ? (
            <>
              {[1, 2, 3, 4, 5].map((index) => (
                <ArticleBrief
                  key={"trend " + index}
                  loading={true}
                  imageClassNames="h-16 w-16 md:h-16 md:w-16"
                  showDescription={false}
                />
              ))}
            </>
          ) : (
            <>
              {newsData.slice(1, 6).map((article) => (
                <ArticleBrief
                  key={article.id}
                  article={article}
                  imageClassNames="h-16 w-16 md:h-16 md:w-16"
                  showDescription={false}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
