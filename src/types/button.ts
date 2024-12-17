import { ReactNode } from "react";

export interface IButtonProps{
    text: string,
    icon?:ReactNode,
    className?: string,
    onClick?: () => void
} 