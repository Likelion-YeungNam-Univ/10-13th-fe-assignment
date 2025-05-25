import React from "react";

const Home = () => {
  return (
    <div>
      <h2 className="flex justify-center font-bold text-3xl text-green-700 mt-3">
        영화 정보 안내
      </h2>
      <div className="flex justify-center gap-6 mt-8">
        <img
          src="/images/Netfilx.jpeg"
          alt="넷플릭스"
          className="w-48 rounded-lg shadow"
        />
        <img
          src="/images/Tving.jpeg"
          alt="티빙"
          className="w-48 rounded-lg shadow"
        />
        <img
          src="/images/Wavve.jpeg"
          alt="웨이브"
          className="w-48 rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default Home;
