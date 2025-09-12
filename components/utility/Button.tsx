import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    butonText: string;
    buttonLink: string;
    buttonType: "outline" | "filled" | "none"
    textSize: "lg" | "md" | "sm"
}

const Button: React.FC<ButtonProps> = ({buttonLink, butonText, buttonType}) => {
  return (
    <div className='cursor-pointer'>
        <Link href={buttonLink} className={`inline-block min-w-[150px] w-full px-7 py-3 rounded-full border-2 font-semibold transition-colors ${buttonType === "outline" ? "border-primary text-primary hover:bg-primary/10" : buttonType === "filled" ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90" : "border-transparent"}`}>
          <button type='button' className="w-full text-center">{butonText}</button>
        </Link>
    </div>
  )
}

export default Button