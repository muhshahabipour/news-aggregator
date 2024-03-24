import ArticleBrief from "../../components/Feeds/ArticleBrief";
import { useEffect } from "react";
import useNewsData from "@/hooks/useNewsApiData";
import { useParams } from "react-router-dom";

const NewsByCategory = () => {
  const { category } = useParams();

  const { loading, newsData: articles = [] } = useNewsData(
    null,
    {
      category: category,
    },
    1,
    20
  );

  useEffect(() => {
    if (!loading) console.log(loading);
  }, [articles, loading]);

  return (
    <div className="flex-grow flex flex-col gap-8 px-6">
      <div className="flex flex-col gap-y-4 xl:flex-row">
        <div className="flex flex-col xl:basis-3/5 xl:pr-2 gap-y-4">
          <h1 className="font-bold text-2xl">
            Last from{" "}
            <span className="text-orange-400 capitalize">
              {category || "unknown"}
            </span>
          </h1>

          <div className="flex flex-col gap-4">
            {[...(articles || [])].map((article) => (
              <ArticleBrief key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsByCategory;
