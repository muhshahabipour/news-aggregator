import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

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

const Header = () => {
  return (
    <div className="p-8 flex bg-neutral-100 rounded-b-2xl gap-4 flex-col">
      <div className="flex gap-4 items-center justify-between">
        <NavLink to="/" className="flex flex-col text-3xl">
          <h1 className="text-neutral-900 font-bold">News</h1>
          <span className="text-sm text-blue-700 font-semibold">
            By category
          </span>
        </NavLink>

        <div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              className={cn(
                "block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400",
                "focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
                "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
                "invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                "pl-8"
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap max-w-screen-md mx-auto">
        <NavLink
          to="/"
          className="p-2 pr-4 mr-2 border-r border-neutral-300 leading-4 font-mono"
        >
          Home
        </NavLink>

        {[...(categories || [])].map((category) => (
          <NavLink
            to={`/categories/${category.key}`}
            key={category.key}
            className="p-4 leading-4 font-mono"
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
