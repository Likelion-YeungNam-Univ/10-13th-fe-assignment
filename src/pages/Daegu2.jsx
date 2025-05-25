import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Daegu2 = () => {
  const [list, setList]       = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
        '/kor/api/tasty.html',
        { params: { mode: 'json', addr: '중구' } }
      );
      setList(data.data);
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
      <h2 className="text-3xl font-bold mb-8 text-sky-700 text-center">대구광역시 맛집</h2>

      <ul className="space-y-4">
        {list.map(item => (
          <li key={item.OPENDATA_ID} className="rounded-xl bg-white p-5 shadow">
            <h3 className="font-semibold text-sky-600">{item.BZ_NM}</h3>
            <p className="text-sm text-emerald-600">{item.FD_CS}</p>
            <p className="text-sm text-gray-500">{item.GNG_CS}</p>
            <p className="mt-2">{item.SMPL_DESC || '설명이 존재하지 않습니다'}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Daegu2
