import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

const TextInput = ({ placeholder, type = "text", className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400",
        "focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600",
        "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
        "invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
        className
      )}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
