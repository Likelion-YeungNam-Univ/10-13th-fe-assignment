import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Daegu4 = () => {
  const [list, setList]       = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        // proxy 설정을 통해 아래 경로가
        // https://thegoodnight.daegu.go.kr/ajax/api/thegoodnight.html?mode=json&item_count=10
        // 로 포워딩됩니다.
        const res = await axios.get('/ajax/api/thegoodnight.html', {
          params: { mode: 'json', item_count: 10 }
        })
        // 실제 배열은 res.data.data 안에 있으니 여기서 꺼냅니다.
        setList(res.data.data)
      } catch (e) {
        console.error(e)
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
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-sky-700 text-center">
        대구 테마별 숙박시설
      </h2>

      <ul className="space-y-4">
        {list.map(item => (
          <li key={item.num} className="rounded-xl bg-white p-5 shadow">
            <h3 className="font-semibold text-sky-600">{item.shop}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.address}</p>
             <p className="mt-1 text-sm">전화: {item.tel}</p>
             <p className="mt-1 text-sm">제공사항: {item.offer}</p> 
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Daegu4
