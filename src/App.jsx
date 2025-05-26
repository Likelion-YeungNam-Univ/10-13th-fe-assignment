import { useEffect, useRef, useState } from "react";
import axios from "axios";

// 카카오맵 api key
const JS_API_KEY = import.meta.env.VITE_KAKAO_JS_KEY;
const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_KEY;

function App() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState("멋쟁이사자처럼");
  const [marker, setMarker] = useState(null);

  // 카카오맵 가져오기
  useEffect(() => {
    const loadMap = () => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.571002, 126.978931),
        level: 3,
      };
      const kakaoMap = new window.kakao.maps.Map(container, options);
      setMap(kakaoMap);
    };

    if (document.getElementById("kakao-map-script")) {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(loadMap);
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "kakao-map-script";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${JS_API_KEY}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(loadMap);
    };

    document.head.appendChild(script);
  }, []);

  // 카카오맵 검색 api 호출
  const handleSearch = async () => {
    if (!keyword.trim()) return;

    try {
      const res = await axios.get(
        "https://dapi.kakao.com/v2/local/search/keyword.json",
        {
          params: { query: keyword },
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
        }
      );

      const result = res.data.documents[0];
      if (!result) {
        alert("검색 결과가 없습니다.");
        return;
      }

      // 좌표를 사용해 검색 후 맵마킹
      const { x, y } = result;

      const latLng = new window.kakao.maps.LatLng(y, x);
      if (marker) marker.setMap(null);

      const newMarker = new window.kakao.maps.Marker({
        map,
        position: latLng,
      });

      setMarker(newMarker);
      map.setCenter(latLng);
    } catch (error) {
      console.error("API 오류:", error);
      alert("API 호출 중 오류 발생");
    }
  };

  return (
    <div className="min-h-screen bg-sky-300 flex flex-col items-center py-4">
      <h6 className="text-4xl text-blue-950 text-center py-2">
        🦁 LikeLion Map 🦁
      </h6>

      <div
        ref={mapRef}
        className="w-[80vw] h-[80vh] border-4 border-sky-950"
      ></div>

      <div className="flex mt-2">
        <input
          type="text"
          placeholder="장소를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          className="px-4 py-2 border-4 border-sky-950"
        />
        <button
          onClick={handleSearch}
          className="bg-sky-950 hover:bg-sky-800 text-white px-4 py-2"
        >
          검색
        </button>
      </div>
    </div>
  );
}

export default App;
