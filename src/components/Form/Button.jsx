import PropTypes from "prop-types";
import { cn } from "@/utils/cn";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded p-2",
        variant === "primary" && "bg-blue-600 text-white",
        variant === "outline" && "border border-blue-600 text-blue-600",
        "disabled:bg-slate-50 disabled:text-slate-200 disabled:border-slate-200 disabled:shadow-none",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["primary", "outline"]),
};

export default Button;
