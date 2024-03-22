/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";

const alertStyles = cva(
  ["alert", "flex", "justify-center", "items-center", "gap-2", "p-4", "rounded"], // Base styles
  {
    variants: {
      type: {
        success: ["bg-green-100", "text-green-800", "border-green-300"],
        error: ["bg-red-100", "text-red-800", "border-red-300"],
        warning: ["bg-yellow-100", "text-yellow-800", "border-yellow-300"],
        info: ["bg-blue-100", "text-blue-800", "border-blue-300"],
      },
    },
  }
);

function Alert({ type = "info", children }) {
  return (
    <div role="alert" className={alertStyles({ type })}>
      <span>{children}</span>
    </div>
  );
}

export default Alert;
