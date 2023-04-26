import Link from "next/link";

export default function Home() {
  return (
  <>
  <h1>MBTI 검사하기</h1>
  <Link href="/Quiz">
    <button>시작하기</button>
  </Link>  
</>
  )
}
