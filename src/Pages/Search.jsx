import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [enter, setEnter] = useState("");
  const [information, setInformation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSearch = async () => {
    if (!enter) return;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${enter.toLowerCase()}`
      );
      setInformation(response.data);
    } catch (err) {
      setError("포켓몬을 찾을 수 없습니다.");
      console.error("데이터 로딩 실패:", error);
      window.alert("포켓몬 찾기 실패");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-8xl text-center">로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">포켓몬 검색</h2>
      <input
        type="text"
        placeholder="포켓몬 이름 또는 번호"
        value={enter}
        onChange={(e) => setEnter(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={fetchSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        검색
      </button>

      {information && (
        <div className="mt-4 p-4 border flex flex-col items-center bg-gray-200">
          <h3 className="text-2xl font-bold capitalize">{information.name}</h3>
          <img src={information.sprites.front_default} alt={information.name} />
          <p>기본 경험치: {information.base_experience}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
