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

const PortfolioCard = () => {
  return (
    <div className='py-10'>
        <BubbleTag text='2026' theme='dark' direction='left' fontStyle='italic-normal' />
        <div>
            {/* <div className='h-[70px] bg-transparent w-[40%] flex justify-self-end  rounded-full -mb-14 -mt-6 -mr-10 backdrop-blur-[4px]' /> */}
            <h1 className='text-9xl uppercase text-white font-[family-name:var(--font-rubikMaze)]'>portfolio</h1>
            {/* <div className='h-[70px] bg-transparent shadow-[0px_0px_105px_0px_#00000037] w-[58%] flex rounded-full -ml-16 -mt-14 -mb-6 backdrop-blur-[4px]' /> */}
        </div>
        <BubbleTag text='Sunday Solomon' theme='light' direction='right' fontStyle='signature' />
    </div>
  )
}

export default PortfolioCard