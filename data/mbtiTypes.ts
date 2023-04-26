// data/mbtiTypes.ts

export interface MbtiTypeInfo {
    type: string;
    title: string;
    description: string;
  }
  
  export const mbtiTypes: MbtiTypeInfo[] = [
    {
      type: 'ISTJ',
      title: '세상의 소금형',
      description: '현실주의자, 책임감이 강함, 법과 규칙을 어기는 것을 싫어함',
    },
    {
      type: 'INTJ',
      title: '용의주도한 전략가',
      description: '목표지향적, 뭐 하나에 꽂히면 추진력이 엄청남, 논리가 정교하고 강함, 말싸움으론 절대 안짐',
    },
    {
      type: 'ESTJ',
      title: '엄격한 관리자',
      description: '추진력이 좋고 일을 잘함, 알파메일에 근접, 책임감이 뛰어나서 맡은 일은 하기싫어도 마무리 지음, 상급자라해도 아닌건 아닌거, 철두철미함, 감정컨트롤 잘함',
    },
    {
      type: 'ENTJ',
      title: '타고난 리더',
      description: '외향적이면서 신념이 뚜렷함, 알파메일에 근접, 성취중심적인 사람, 카리스마가 뛰어나고 말빨이 미쳤음,본투비 리더,칼같음, 자존감이 매우 높음, 계획과 틀어지는걸 싫어함',
    },
    {
      type: 'ISTP',
      title: '만증재주꾼',
      description: '말이 잘 없고 독립적임, 그렇지만 필요할 때는 함, 각종 도구를 다루는데에 능숙함, 육체적으로 움직이는걸 좋아하나 개인종목에서 강함, 조용한 인싸 스타일, 개인주의 성향 강함, 오지랖이 적음, 관심없으면 쳐다도 안봄',
    },
    {
      type: 'INTP',
      title: '논리적인 사색가',
      description: '조용하며 논리와 분석으로 문제해결 하기를 좋아함, 보통 먼저 대화를 시작하진 않지만 관심있는 분야해선 말 많음, 창의적 지능과 논리 능력이 나머지 유형중에서 제일 뛰어남, 망상을 자주함,지만 잘난 줄 암',
    },
    {
      type: 'ESTP',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ENTP',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ISFJ',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'INFJ',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ESFJ',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ENEJ',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ISFP',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'INFP',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ESFP',
      title: 'The Campaigner',
      description: '...',
    },
    {
      type: 'ENFP',
      title: 'The Campaigner',
      description: '...',
    },
    // 유형추가하려면 여기다가
  ];
  