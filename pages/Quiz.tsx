// pages/Quiz.tsx

import React, { useState } from 'react';
import Question from '../components/Question';

import { Question as QuestionInterface } from '../types/interface';
import { useRouter } from 'next/router';

const questions: QuestionInterface[] = [
  // 여기에 12가지 질문은 추가하시오
  {
    id: 1,
    text: '1. 모처럼 찾아온 주말, 여가시간에 나는 주로',
    optionA: {type: 'I', description: '혼자서 영화를 보거나 음악을 듣거나 취미활동을 한다.'},
    optionB: {type: 'E', description: '혼자서 하는것도 좋지만 같이 무언갈 하는게 즐겁다.'}
  },
  {
    id: 2,
    text: '2. 식당에 들어가서 음식을 주문하려고 한다 이때 나는',
    optionA: {type: 'E', description: '그냥 큰 소리로 저기요! 부르고 메뉴를 말한다.'},
    optionB: {type: 'I', description: '식탁에 있는 주문서를 작성한다.'}
  },
  {
    id: 3,
    text: '3. 수학시간에 새로운 이론에 대해서 배웠다 그럴땐',
    optionA: {type: 'E', description: '문제 풀면서 이해하는거지~'},
    optionB: {type: 'I', description: '일단 이해를 해야 문제를 풀든 말든하지..'}
  },{
    id: 4,
    text: '역사라는 과목은',
    optionA: {type: 'S', description: '과거의 모습을 통해 현재의 문제를 해결 할 수 있게 도와준다.'},
    optionB: {type: 'N', description: '지루하고 따분한 과목 이미 지나간일을 왜 공부하는지 이해가 되지 않는다.'}
  }
  ,{
    id: 5,
    text: '숙제를 하기 위해 책상에 앉았다',
    optionA: {type: 'N', description: '근데 책상이 너무 더러운거 같다. 정리부터 하자.'},
    optionB: {type: 'S', description: '빨리 숙제끝내고 그 다음에 생각하자.'}
  },
  {
    id: 6,
    text: '여섯번째 질문입니다',
    optionA: {type: 'S', description: '옵션 A : 열림성'},
    optionB: {type: 'N', description: '옵션 B : 내향성'}
  },
  {
    id: 7,
    text: '일곱번째 질문입니다',
    optionA: {type: 'T', description: '옵션 A : 열림성'},
    optionB: {type: 'F', description: '옵션 B : 내향성'}
  },{
    id: 8,
    text: '여덟번째 질문입니다',
    optionA: {type: 'T', description: '옵션 A : 열림성'},
    optionB: {type: 'F', description: '옵션 B : 내향성'}
  },
  {
    id: 9,
    text: '아홉번째 질문입니다',
    optionA: {type: 'T', description: '옵션 A : 열림성'},
    optionB: {type: 'F', description: '옵션 B : 내향성'}
  },{
    id: 10,
    text: '열번째 질문입니다',
    optionA: {type: 'J', description: '옵션 A : 열림성'},
    optionB: {type: 'P', description: '옵션 B : 내향성'}
  },{
    id: 11,
    text: '열한번째 질문입니다',
    optionA: {type: 'J', description: '옵션 A : 열림성'},
    optionB: {type: 'P', description: '옵션 B : 내향성'}
  },{
    id: 12,
    text: '열두번째 질문입니다',
    optionA: {type: 'P', description: '옵션 A : 열림성'},
    optionB: {type: 'J', description: '옵션 B : 내향성'}
  }
];

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<string[]>([]);
  const router = useRouter();

  const handleSelect = (type: string) => {
    setResult([...result, type]);

    // 콘솔에 현재까지의 선택 결과 출력
  console.log('Selected option:', type);
  console.log('Current answers:', [...result, type]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else{
       // 마지막 질문에서 답을 선택한 경우 Result 컴포넌트를 렌더링
       router.push(`/result/${calculateResult()}`);
    }
  };

  const calculateResult = () => {
    const types = ['I', 'E', 'N', 'S', 'T', 'F', 'J', 'P'];
    const count = new Map<string, number>();

    for (const type of types) {
      count.set(type, 0);
    }

    for (const type of result) {
      count.set(type, (count.get(type) || 0) + 1);
    }

    let finalResult = '';
    for (let i = 0; i < types.length; i += 2) {
      finalResult += count.get(types[i])! >= count.get(types[i + 1])! ? types[i] : types[i + 1];
    }

    return finalResult;
  };

  return (
  <div>
    <Question
      question={questions[currentQuestionIndex]}
      onSelect={handleSelect}
    />
  </div>
);
};

export default Quiz;
