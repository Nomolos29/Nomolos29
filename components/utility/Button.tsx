import Link from 'next/link'
import React, { ReactNode } from 'react'

interface ButtonProps {
    butonText: string;
    buttonLink: string;
    targetType?: string;
    buttonType: "outline" | "filled" | "none";
    textSize: "lg" | "md" | "sm";
    icon?: ReactNode
}

const Button: React.FC<ButtonProps> = ({buttonLink, butonText, buttonType, targetType, icon}) => {
  return (
    <div className=''>
        <Link href={buttonLink} target={targetType} className={`inline-block min-w-[150px] w-full px-7 py-3 rounded-full border-2 font-semibold transition-colors ${buttonType === "outline" ? "border-primary text-primary hover:bg-primary/10" : buttonType === "filled" ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90" : "border-transparent"}`}>
          <button type='button' className="w-full text-center capitalize cursor-pointer">{butonText} {icon}</button>
        </Link>
    </div>
  )
}

export default Button