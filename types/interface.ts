// interface.ts

export interface MbtiType {
    type: string;
    path?: string;
    description: string;
  }
  
  export interface Question {
    id: number;
    text: string;
    optionA: MbtiType;
    optionB: MbtiType;
  }
  