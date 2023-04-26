// pages/result/[type].tsx

import { useRouter } from 'next/router';
import { mbtiTypes, MbtiTypeInfo } from '../../data/mbtiTypes';

const ResultPage: React.FC = () => {
  const router = useRouter();
  const { type } = router.query;
  const handleBackToHome = () => {
    router.push('/'); // 처음 페이지로 돌아가기
  };
  const mbtiType = mbtiTypes.find((t: MbtiTypeInfo) => t.type === type);

  if (!mbtiType) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{mbtiType.title}</h1>
      <h2>{mbtiType.type}</h2>
      <p>{mbtiType.description}</p>
      <button onClick={handleBackToHome}>다시하기</button>
    </div>
  );
};

export default ResultPage;
