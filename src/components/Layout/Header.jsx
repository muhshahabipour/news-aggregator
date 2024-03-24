import { cn } from "@/utils/cn";

const Header = () => {
  return (
    <div className="p-8 flex bg-neutral-100 rounded-b-2xl gap-4 items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-neutral-900 font-bold">News</h1>
        <span className="text-sm text-blue-700">By category</span>
      </div>

      <div >
        <input
          type="text"
          className={cn(
            "block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400",
            "focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
            "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
            "invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          )}
        />
      </div>
    </div>
  );
};

export default Header;
