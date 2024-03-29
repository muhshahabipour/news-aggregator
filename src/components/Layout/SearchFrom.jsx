import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import TextInput from "../Form/TextInput";

const SearchFrom = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const inpRef = useRef(null);
  const [term, setTerm] = useState("");

  

  useEffect(() => {
    const query = new URLSearchParams(search);
    setTerm(query.get("q"));
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + inpRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <TextInput
          className="pl-8"
          ref={inpRef}
          placeholder="Search..."
          defaultValue={term}
        />
      </div>
    </form>
  );
};

export default SearchFrom;