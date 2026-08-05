"use client"

import { AccordionProps, QuestionCardProps } from '@/lib/types/interfaces';
import React, { useState } from 'react'
import { FaRegComments } from "react-icons/fa";



const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer, questionNumber, tilt, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white w-full rounded-2xl group cursor-pointer transition-all ease-in-out duration-500 shadow-[10px_10px_20px_rgba(252,249,249,0.1)] ${
        isActive ? 'rotate-0' : tilt === 'left' ? 'rotate-3 hover:rotate-0' : tilt === 'right' ? '-rotate-3 hover:rotate-0' : 'rotate-0'
      }`}
    >
      <div className='flex justify-between items-center px-5 py-3 border-b border-gray-200'>
        <p>Question<span className='pl-1'>{questionNumber}</span></p>
        <FaRegComments className='text-gray-500 text-xl' />
      </div>
      <div className='p-3'>
        <div className='bg-gray-900 text-white p-4 overflow-hidden rounded-2xl flex flex-col gap-y-3 font-[family-name:var(--font-poppins)]'>
          <h3 className='text-lg'>{question}</h3>
          <p className={`text-sm text-gray-200 leading-relaxed italic transition-all duration-500 overflow-hidden ${
            isActive ? 'max-h-96 opacity-100 xl:max-h-0 xl:opacity-0' : 'max-h-0 opacity-0 xl:group-hover:max-h-96 xl:group-hover:opacity-100'
          }`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}


const Accordion:React.FC<AccordionProps> = ({questions}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setActiveIndex(prev => prev === index ? null : index)
    }

    return (
        <div className='w-full space-y-10 overflow-y-scroll h-full px-2 py-5 scrollbar-hide'>
            {questions.map((faq, index) => (
                <QuestionCard
                    key={index}
                    question={faq.question}
                    questionNumber={index + 1}
                    tilt={index % 2 == 0 ? 'left' : 'right'}
                    answer={faq.answer}
                    isActive={activeIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    )
}

export default Accordion