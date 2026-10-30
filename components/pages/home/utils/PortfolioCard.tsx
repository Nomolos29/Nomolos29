"use client"

import React, { useEffect, useRef, useState } from 'react'

interface BubbleTagProps {
    text: string;
    theme: 'dark' | 'light';
    direction: 'right' | 'left';
    fontStyle?: 'signature' | 'italic-normal';
    isVisible?: boolean;
}

const BubbleTag: React.FC<BubbleTagProps> = ({ text, theme, direction, fontStyle, isVisible = true }) => (
    <div
        className={`flex ${direction === 'right' ? 'justify-end' : 'justify-start'} transition-all duration-700 ease-out ${
            isVisible
                ? 'opacity-100 translate-x-0'
                : direction === 'left'
                ? 'opacity-0 -translate-x-8'
                : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: direction === 'left' ? '100ms' : '300ms' }}
    >
        <div className={`flex items-center gap-x-1.5 ${fontStyle === 'signature' ? 'font-[family-name:var(--font-italianno)]' : fontStyle === 'italic-normal' ? 'italic' : ''}`}>
            <div className={`h-8 w-8 rounded-full border border-white/80 transition-transform duration-500 hover:scale-110 ${theme === 'light' ? 'text-black bg-white shadow-sm' : 'text-white bg-white/10 backdrop-blur-sm'}`} />
            <p className={`border px-5 md:px-8 h-8 flex items-center justify-center text-lg md:text-[22px] rounded-full max-w-fit border-white/80 ${theme === 'light' ? 'text-black bg-white shadow-sm' : 'text-white bg-white/10 backdrop-blur-sm'}`}>{text}</p>
        </div>
    </div>
)

interface PortfolioCardProps {
    preHeading?: string;
    headingText: string;
    subheadingText?: string;
    theme?: 'dark' | 'light';
    textColor?: 'white' | 'adaptive';
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    preHeading,
    headingText,
    subheadingText,
    theme = 'light',
    textColor = 'white',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className='py-8 md:py-10 w-fit mx-auto'>
            {preHeading && (
                <BubbleTag
                    text={preHeading}
                    theme='dark'
                    direction='left'
                    fontStyle='italic-normal'
                    isVisible={isVisible}
                />
            )}
            <div
                className={`w-fit transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
                }`}
                style={{ transitionDelay: '180ms' }}
            >
                <h2
                    className={`text-[42px] sm:text-[54px] md:text-[5rem] lg:text-[6.5rem] leading-tight xl:text-8xl uppercase font-[family-name:var(--font-rubikMaze)] tracking-wide ${
                        textColor === 'adaptive' ? 'text-foreground' : 'text-white'
                    }`}
                >
                    {headingText}
                </h2>
            </div>
            {subheadingText && (
                <BubbleTag
                    text={subheadingText}
                    theme={theme}
                    direction='right'
                    fontStyle='signature'
                    isVisible={isVisible}
                />
            )}
        </div>
    )
}

export default PortfolioCard
