import React from 'react'
import { FaRegComments } from "react-icons/fa";

interface QuestionCardProps {
    question: string,
    answer: string
    tilt?: 'left' | 'right'
    questionNumber?: number
}

const QuestionCard: React.FC<QuestionCardProps> = ({question, answer, questionNumber, tilt}) => {
  return (
    <div className={`bg-white w-full rounded-2xl group transition-all ease-in-out ${tilt === "left" ? "rotate-3" : tilt === "right" ? "-rotate-3" : "rotate-0"} hover:rotate-0 duration-500 shadow-[10px_10px_20px_rgb(252, 249, 249)]`}>
        <div className='flex justify-between items-center px-5 py-3 border-b border-gray-200'>
            <p>Question<span className='pl-1'>{questionNumber}</span></p>
            <FaRegComments className='text-gray-500 text-xl' />
        </div>
        <div className='p-3'>
            <div className='bg-gray-900 text-white p-4 overflow-hidden rounded-2xl flex flex-col gap-y-5 pb-5 font-[family-name:var(--font-poppins)]'>
                <h3 className='text-lg h-fit'>{question}</h3>
                <p className='text-sm text-gray-200 leading-relaxed italic opacity-10 -mb-10 mt-5 transition-all duration-500 h-0 group-hover:h-fit group-hover:m-0 group-hover:opacity-100'>{answer}</p>
            </div>
        </div>
    </div>
  )
}

export default QuestionCard