import React from 'react'
import { useNavigate } from 'react-router-dom'

const buttonStyle =
  'mt-8 px-20 py-10 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition text-2xl'

const Home = () => {
  const navigate = useNavigate()
  const goList   = () => navigate('/daeguList')

  return (
    <section className="flex flex-col items-center justify-center text-center text-sky-800 min-h-screen">
      <h1 className="text-5xl font-bold mb-4">대구광역시의 맛집 &amp; 숙박업소</h1>
      <p className="mt-2 text-gray-600 text-2xl">
        음식부터 우수 숙박업소까지 한눈에 확인해 보세요!
      </p>

      <button className={buttonStyle} onClick={goList}>
        대구 맛집·숙박 보기
      </button>
    </section>
  )
}

export default Home
