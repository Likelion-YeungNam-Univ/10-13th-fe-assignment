import wallpaper from "../assets/wallpaper.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <img src={wallpaper} className="w-full h-full object-cover" />
    </div>
  );
};

export default Home;
