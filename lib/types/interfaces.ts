import { Question } from "./types"

export interface AccordionProps {
    questions: Question[]
}


export interface QuestionCardProps extends Question {
    tilt?: 'left' | 'right'
    questionNumber?: number
    isActive: boolean
    onClick: () => void
}