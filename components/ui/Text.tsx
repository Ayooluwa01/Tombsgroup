import { TextVariants } from "@/libs/TextVariant";
import { TextProps } from "../../types/types";

export default function Text({
  variant,
  children,
  className,
  as: Component = "p",
}: TextProps) {
  return (
    <Component className={`${TextVariants[variant]} ${className}`}>
      {children}
    </Component>
  );
}
