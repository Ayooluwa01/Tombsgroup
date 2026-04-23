import { buttonVariants } from "@/libs/ButtonVariant";
import { ButtonProps } from "../../types/types";

export default function Button({
  children,
  variant = "medium",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
    flex items-center justify-center transition
    appearance-none
    ${buttonVariants[variant]}
    ${className || ""}
  `}
    >
      {children}
    </button>
  );
}
