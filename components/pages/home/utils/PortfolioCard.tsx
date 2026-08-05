import React from 'react'

interface BubbleTagProps {
    text: string;
    theme: 'dark' | 'light';
    direction: 'right' | 'left';
    fontStyle?: 'signature' | 'italic-normal'
}

const BubbleTag: React.FC<BubbleTagProps> = ({text, theme, direction, fontStyle}) => (
    <div className={`flex ${direction === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className={`flex gap-x-1.5 ${fontStyle === 'signature' ? 'font-[family-name:var(--font-italianno)]' : fontStyle === 'italic-normal' ? 'italic' : ''}`}>
            <div className={`h-8 w-8 rounded-full border border-white ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-transparent'}`} />
            <p className={`border px-8 h-8 flex items-center justify-center text-[22px] rounded-full max-w-fit border-white ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-transparent'}`}>{text}</p>
        </div>
    </div>
)

interface PortfolioCardProps {
    preHeading?: string,
    headingText: string,
    subheadingText?: string,
    theme?: 'dark' | 'light'
}

const PortfolioCard:React.FC<PortfolioCardProps> = ({preHeading, headingText, subheadingText, theme = 'light'}) => {
  return (
    <div className='py-10 w-fit'>
        {preHeading && <BubbleTag text={preHeading} theme='dark' direction='left' fontStyle='italic-normal' />}
        <div className='w-fit'>
            <h1 className='lg:text-[7rem] leading-tight xl:text-9xl uppercase text-white font-[family-name:var(--font-rubikMaze)]'>{headingText}</h1>
        </div>
        {subheadingText && <BubbleTag text={subheadingText} theme={theme} direction='right' fontStyle='signature' />}
    </div>
  )
}

export default PortfolioCard