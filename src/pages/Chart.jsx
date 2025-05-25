import axios from "axios";
import React, { useEffect, useState } from "react";

const Chart = () => {
  const [hot100, setHot100] = useState([]);
  const [bill200, setBill200] = useState([]);

  const [hot100Date, setHot100Date] = useState("");
  const [bill200Date, setBill200Date] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharts = async () => {
    try {
      const resHot100 = await axios.get(
        "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
      );
      const resBill200 = await axios.get(
        "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json"
      );
      setHot100(resHot100.data.data);
      setHot100Date(resHot100.data.date);

      setBill200(resBill200.data.data);
      setBill200Date(resBill200.data.date);
    } catch (error) {
      setError("차트 로딩 실패");
      console.error("로딩 실패: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharts();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  if (error) return <div>에러: {error}</div>;

  return (
    <div className="h-screen w-full flex overflow-hidden space-x-4">
      <div className="flex flex-col w-1/2">
        <a
          href="https://www.billboard.com/charts/hot-100/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold m-5">Billboard Hot 100™</h2>
          <h4 className="text-gray-500">({hot100Date} 업데이트)</h4>
        </a>
        <ul className="mx-5 flex-1 overflow-y-auto">
          {Array.isArray(hot100) &&
            hot100.map((hot100Song) => (
              <li key={hot100Song.rank}>
                <div className="flex items-center border">
                  <div className="text-5xl bg-black text-white font-bold p-16.5">
                    {hot100Song.rank}
                  </div>
                  <img src={hot100Song.image} />
                  <div className="ml-4">
                    <div className="text-2xl font-bold">{hot100Song.name}</div>
                    <div className="text-2xl">{hot100Song.artist}</div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col w-1/2">
        <a
          href="https://www.billboard.com/charts/billboard-200/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold m-5">Billboard 200™</h2>
          <h4 className="text-gray-500">({bill200Date} 업데이트)</h4>
        </a>
        <ul className="mx-5 flex-1 overflow-y-auto">
          {Array.isArray(bill200) &&
            bill200.map((bill200Song) => (
              <li key={bill200Song.rank}>
                <div className="flex items-center border">
                  <div className="text-5xl bg-black text-white font-bold p-16.5">
                    {bill200Song.rank}
                  </div>
                  <img src={bill200Song.image} />
                  <div className="ml-4">
                    <div className="text-2xl font-bold">{bill200Song.name}</div>
                    <div className="text-2xl">{bill200Song.artist}</div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Chart;
