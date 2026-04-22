import { TextVariants } from "@/libs/TextVariant";
import { TextProps } from "../../types/types";

export default function Text({ variant, children, classname }: TextProps) {
  return <p className={`${TextVariants[variant]} ${classname}`}>{children}</p>;
}
