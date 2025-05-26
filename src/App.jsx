import { useEffect, useRef, useState } from "react";

const JS_API_KEY = import.meta.env.VITE_KAKAO_JS_KEY;

function App() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const kakaoMap = new window.kakao.maps.Map(container, options);
      setMap(kakaoMap);
    };

    if (document.getElementById("kakao-map-script")) {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(loadMap); // ✅ 중복 제거
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "kakao-map-script";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${JS_API_KEY}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(loadMap); // ✅ 중복 제거
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-sky-300 flex flex-col items-center py-4">
      <h6 className="text-4xl text-blue-950 text-center py-2">
        🦁 LikeLion Map 🦁
      </h6>

      <div
        ref={mapRef}
        className="w-[80vw] h-[80vh] border-4 border-sky-950"
      ></div>
    </div>
  );
}

export default App;
