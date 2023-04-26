// components/Question.tsx
import React from 'react';
import { Question as QuestionInterface } from '../types/interface';

interface Props {
  question: QuestionInterface;
  onSelect: (type: string) => void;
}

const Question: React.FC<Props> = ({ question, onSelect }) => {
  const handleSelect = (type: string) => {
    onSelect(type);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <button onClick={() => handleSelect(question.optionA.type)}>
        {question.optionA.description}
      </button>
      <button onClick={() => handleSelect(question.optionB.type)}>
        {question.optionB.description}
      </button>
    </div>
  );
};

export default Question;
