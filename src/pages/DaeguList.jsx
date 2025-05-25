import React from 'react'
import { Link } from 'react-router-dom'

const DaeguList = () => (
  <section className="max-w-4xl mx-auto px-4 py-12 text-sky-800">
    <h2 className="text-3xl font-bold mb-8">대구 음식집&숙박업소</h2>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Link
        to="/daegu1"
        className="block rounded-xl bg-white shadow hover:bg-sky-50 px-5 py-4 transition"
      >
        대구 음식 골목
      </Link>
      <Link
        to="/daegu2"
        className="block rounded-xl bg-white shadow hover:bg-sky-50 px-5 py-4 transition"
      >
        대구광역시 맛집
      </Link>
      <Link
        to="/daegu3"
        className="block rounded-xl bg-white shadow hover:bg-sky-50 px-5 py-4 transition"
      >
        먹거리 골목별 음식점
      </Link>
      <Link
        to="/daegu4"
        className="block rounded-xl bg-white shadow hover:bg-sky-50 px-5 py-4 transition"
      >
        대구 테마별 숙박 시설
      </Link>
    
    </div>
  </section>
)

export default DaeguList
