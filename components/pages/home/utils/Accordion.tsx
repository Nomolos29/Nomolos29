"use client"

import { AccordionProps, QuestionCardProps } from '@/lib/types/interfaces';
import React, { useState } from 'react'
import { FaRegComments } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  questionNumber,
  tilt,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white text-gray-900 w-full rounded-2xl group cursor-pointer transition-all duration-500 shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_34px_rgba(1,75,167,0.25)] ${
        isActive
          ? 'rotate-0 scale-[1.01] ring-2 ring-primary'
          : tilt === 'left'
          ? 'rotate-2 hover:rotate-0 hover:scale-[1.01]'
          : tilt === 'right'
          ? '-rotate-2 hover:rotate-0 hover:scale-[1.01]'
          : 'rotate-0'
      }`}
    >
      <div className='flex justify-between items-center px-5 py-3 border-b border-gray-200'>
        <p className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
          Question <span className='text-primary font-bold'>#{questionNumber}</span>
        </p>
        <div className='flex items-center gap-2'>
          <FaRegComments className='text-gray-400 text-lg group-hover:text-primary transition-colors' />
          <HiChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
              isActive ? 'rotate-180 text-primary' : 'group-hover:text-primary'
            }`}
          />
        </div>
      </div>
      <div className='p-3'>
        <div className='bg-gray-900 text-white p-4 overflow-hidden rounded-xl flex flex-col gap-y-2.5 font-[family-name:var(--font-poppins)]'>
          <h3 className='text-base sm:text-lg font-medium leading-snug'>{question}</h3>
          <p
            className={`text-sm text-gray-300 leading-relaxed transition-all duration-500 overflow-hidden ${
              isActive
                ? 'max-h-96 opacity-100 pt-1'
                : 'max-h-0 opacity-0 xl:group-hover:max-h-96 xl:group-hover:opacity-100 xl:group-hover:pt-1'
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className='w-full space-y-7 overflow-y-auto max-h-[520px] px-4 py-6 scrollbar-hide'>
      {questions.map((faq, index) => (
        <QuestionCard
          key={index}
          question={faq.question}
          questionNumber={index + 1}
          tilt={index % 2 === 0 ? 'left' : 'right'}
          answer={faq.answer}
          isActive={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
