import { cva } from "class-variance-authority";

const buttonStyles = cva(
  [
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  ],
  {
    variants: {
      variant: {
        info: ["bg-blue-500", "hover:bg-blue-600"],
        success: ["bg-green-500", "hover:bg-green-600", "text-slate-100"],
        warning: ["bg-yellow-400", "hover:bg-yellow-500"],
        error: ["bg-red-500", "hover:bg-red-600"],
        pink: ["text-uic-50","bg-uic-500", "hover:bg-uic-600"],
      },
      fullwidth: {
        true: "w-full",
      },
    },
  }
);

// eslint-disable-next-line react/prop-types
function Button({ variant, fullwidth, children, ...rest }) {
  return (
    <button className={buttonStyles({ variant, fullwidth })} {...rest}>
      {children}
    </button>
  );
}

export default Button;
