import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "@/components/Form/Button";
import Datepicker from "tailwind-datepicker-react";
import TextInput from "@/components/Form/TextInput";
import { cn } from "@/utils/cn";
import dayjs from "dayjs";
import qs from "qs";

const AdvanceSearch = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState(null);
  const [from, setFrom] = useState(null);
  const [fromIsOpen, setFromIsOpen] = useState(false);
  const [to, setTo] = useState(null);
  const [toIsOpen, setToIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("publishedAt");

  const inpRef = useRef(null);

  useEffect(() => {
    const query = new URLSearchParams(search);
    setTerm(query.get("q"));
    setSortBy(query.get("sortBy"));
    setCategory(query.get("category"));
    setFrom(query.get("from"));
    setTo(query.get("to"));
    inpRef.current.focus();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      "/search" +
        qs.stringify(
          {
            q: inpRef.current.value,
            category,
            from: from ? dayjs(from).format("YYYY-MM-DD") : null,
            to: to ? dayjs(to).format("YYYY-MM-DD") : null,
            sortBy,
          },
          { skipNulls: true }
        )
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full border p-5 rounded-md"
    >
      <div className="w-full xl:max-w-screen-sm mx-auto space-y-3">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="" className="text-xs">
              Query
            </label>
            <TextInput
              placeholder="Search..."
              ref={inpRef}
              className="mt-1"
              defaultValue={term}
            />
          </div>
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex items-start gap-4 flex-wrap">
              <div className="flex flex-col md:basis-auto basis-1/2 xl:basis-1/2 md:pr-0 pr-2 xl:pr-2">
                <label htmlFor="" className="text-xs">
                  Category
                </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className={cn(
                    "block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400",
                    "focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600",
                    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
                    "invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                    "mt-1"
                  )}
                >
                  {[
                    {
                      title: "All",
                      key: "",
                    },
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
                  ].map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col">
                  <label htmlFor="default-range-1" className="block text-xs">
                    Date from
                  </label>
                  <Datepicker
                    classNames="relative mt-1"
                    show={fromIsOpen}
                    setShow={setFromIsOpen}
                    onChange={setFrom}
                    options={{
                      title: "",
                      autoHide: true,
                      todayBtn: false,
                      clearBtn: true,
                      clearBtnText: "Clear",
                      maxDate: new Date(to || "2030-01-01"),
                      minDate: new Date("1950-01-01"),
                      theme: {
                        background:
                          "bg-white dark:bg-white dark:text-[color:inherit]",
                        todayBtn:
                          "bg-orange-600 text-white dark:bg-orange-600 dark:text-white",
                        clearBtn:
                          "dark:bg-orange-600 bg-orange-600 dark:hover:bg-orange-600 hover:bg-orange-600 dark:border-orange-600 border-orange-600",
                        icons:
                          "dark:bg-transparent hover:text-white dark:hover:text-white bg-transparent dark:hover:bg-orange-600 hover:bg-orange-600 text-neutral-800 dark:text-neutral-800",
                        text: "dark:text-[color:inherit] hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white dark:hover:text-white",
                        disabledText:
                          "bg-transparent text-neutral-300 dark:text-neutral-300",
                        input:
                          "py-2 rounded-md bg-white dark:bg-white border-slate-300 dark:border-slate-300 rounded-md text-sm leading-3 placeholder-slate-400 dark:text-[color:inherit]",
                        inputIcon: "dark:text-neutral-400",
                        selected: "dark:text-white text-white",
                      },
                      icons: {
                        prev: () => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ),
                        next: () => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 rotate-180"
                          >
                            <path
                              fillRule="evenodd"
                              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ),
                      },
                      datepickerClassNames: "top-10",
                      defaultDate: new Date(),
                      value: from,
                      language: "en",
                      disabledDates: [],
                      weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                      inputNameProp: "from",
                      inputIdProp: "from",
                      inputPlaceholderProp: "Select Date",
                      inputDateFormatProp: {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      },
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="default-range-1" className="block text-xs">
                    Date to
                  </label>
                  <Datepicker
                    classNames="relative mt-1"
                    show={toIsOpen}
                    setShow={setToIsOpen}
                    onChange={setTo}
                    options={{
                      title: "",
                      autoHide: true,
                      todayBtn: false,
                      clearBtn: true,
                      clearBtnText: "Clear",
                      maxDate: new Date("2030-01-01"),
                      minDate: new Date(from || "1950-01-01"),
                      theme: {
                        background:
                          "bg-white dark:bg-white dark:text-[color:inherit]",
                        todayBtn:
                          "bg-orange-600 text-white dark:bg-orange-600 dark:text-white",
                        clearBtn:
                          "dark:bg-orange-600 bg-orange-600 dark:hover:bg-orange-600 hover:bg-orange-600 dark:border-orange-600 border-orange-600",
                        icons:
                          "dark:bg-transparent hover:text-white dark:hover:text-white bg-transparent dark:hover:bg-orange-600 hover:bg-orange-600 text-neutral-800 dark:text-neutral-800",
                        text: "dark:text-[color:inherit] hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white dark:hover:text-white",
                        disabledText:
                          "bg-transparent text-neutral-300 dark:text-neutral-300",
                        input:
                          "py-2 rounded-md bg-white dark:bg-white border-slate-300 dark:border-slate-300 rounded-md text-sm leading-3 placeholder-slate-400 dark:text-[color:inherit]",
                        inputIcon: "dark:text-neutral-400",
                        selected: "dark:text-white text-white",
                      },
                      icons: {
                        prev: () => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ),
                        next: () => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 rotate-180"
                          >
                            <path
                              fillRule="evenodd"
                              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ),
                      },
                      datepickerClassNames: "top-10",
                      defaultDate: new Date(),
                      value: to,
                      language: "en",
                      disabledDates: [],
                      weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                      inputNameProp: "to",
                      inputIdProp: "to",
                      inputPlaceholderProp: "Select Date",
                      inputDateFormatProp: {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      },
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col md:basis-auto basis-1/2 xl:basis-1/2 md:pr-0 pr-2 xl:pr-2">
                <label htmlFor="" className="text-xs">
                  Sort By
                </label>
                <div className="w-full relative mt-1">
                  <select
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                    className={cn(
                      "block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400",
                      "focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600",
                      "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
                      "invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    )}
                  >
                    {[
                      {
                        value: "relevancy",
                        label: "Relevancy",
                      },
                      {
                        value: "popularity",
                        label: "Popularity",
                      },
                      {
                        value: "publishedAt",
                        label: "Published At",
                      },
                    ].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <Button type="submit" className="px-6 py-1.5">
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdvanceSearch;
