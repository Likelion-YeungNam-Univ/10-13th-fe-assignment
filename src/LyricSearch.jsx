import axios from "axios";
import React, { useEffect, useState } from "react";

const LyricSearch = () => {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [displayArtist, setDisplayArtist] = useState("");
  const [displayTitle, setDisplayTitle] = useState("");

  const fetchLyrics = async () => {
    setLoading(true);
    setLyrics("");
    setError(null);

    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${title}`
      );
      setLyrics(response.data.lyrics);
      setDisplayArtist(artist);
      setDisplayTitle(title);
      setArtist("");
      setTitle("");
    } catch (error) {
      setError("검색어를 다시 확인해주세요 !");
      console.error("데이터 로딩 실패: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl m-3 font-semibold">노래 가사 검색</h2>
      <p className="text-gray-500 m-3">
        영문으로 입력해주세요 ! (예시: aespa / next level)
      </p>
      <div className="flex space-x-3 m-3">
        <input
          type="text"
          placeholder="가수 이름"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="border pl-1.5 rounded-md"
        />
        <input
          type="text"
          placeholder="노래 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border pl-1.5 rounded-md"
        />
        <button
          className="border bg-gray-200 px-2 py-1 rounded-md hover:bg-yellow-200"
          onClick={fetchLyrics}
        >
          검색
        </button>
      </div>

      {loading && <div className="text-gray-500 m-3">로딩 중 ..</div>}

      {error && <div className="text-red-500 m-3">{error}</div>}

      {lyrics && (
        <div className="flex flex-col">
          <h3 className="ml-4 text-xl font-semibold">
            {displayArtist} - {displayTitle}
          </h3>
          {/* 줄바꿈, 공백 그대로 출력을 위해 <pre>태그 사용 */}
          <pre className="m-3 p-3">{lyrics}</pre>
        </div>
      )}
    </div>
  );
};

export default LyricSearch;
