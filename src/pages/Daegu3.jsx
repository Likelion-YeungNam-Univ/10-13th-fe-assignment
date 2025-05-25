import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Daegu3 = () => {
  const [list, setList]       = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          '/kor/api/Alley_food.html',
          {
            params: {
              mode: 'json',
              OPENDATA_ID: 'TL-11'
            }
          }
        )
        setList(data.data)
      } catch (e) {
        setError('데이터 로딩 실패')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p className="py-20 text-center">로딩 중…</p>
  if (error)   return <p className="py-20 text-center text-red-500">{error}</p>

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-sky-700 text-center">
        대구 먹거리골목별 음식점
      </h2>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(item => (
          <li key={item.cnt} className="rounded-xl bg-white shadow p-5">
            <h3 className="font-semibold text-sky-600">{item.BZ_NM}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.FD_CS}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Daegu3
