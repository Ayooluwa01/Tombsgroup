import { TextVariants } from "@/libs/TextVariant";


// Text type 
export interface TextProps {
  variant: keyof typeof TextVariants;
  children: React.ReactNode;
  classname?: string;
}


// Button type