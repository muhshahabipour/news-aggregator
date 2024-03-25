import CategorySection from "./CategorySection";

const categories = [
  {
    title: "Business",
    key: "business",
  },

  {
    title: "Entertainment",
    key: "entertainment",
  },
  {
    title: "General",
    key: "general",
  },

  {
    title: "Health",
    key: "health",
  },

  {
    title: "Science",
    key: "science",
  },
  {
    title: "Sports",
    key: "sports",
  },

  {
    title: "Technology",
    key: "technology",
  },
];

const TopCategories = () => {
  return (
    <div className="flex flex-wrap flex-col gap-y-8 xl:flex-row">
      {[...(categories || [])].map((category) => (
        <div className="xl:basis-1/2 flex-shrink-0 xl:even:px-2 xl:odd:pr-2" key={category.key}>
          <CategorySection category={category} />
        </div>
      ))}
    </div>
  );
};

export default TopCategories;
