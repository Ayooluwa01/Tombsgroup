import { buttonVariants } from "@/libs/ButtonVariant";
import { TextVariants } from "@/libs/TextVariant";


// Text type 
export interface TextProps {
  variant: keyof typeof TextVariants;
  children: React.ReactNode;
  className?: string;
as?: React.ElementType;
}


// Button type
export interface ButtonProps{
    children:React.ReactNode,
    variant:keyof typeof buttonVariants;
    className?:string;
    onClick?: () => void;
}


// Navlink type
export interface NavlinkProps{
    name:string;
    href:string;
 icon?: React.ElementType}