import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="text-4xl font-bold">Movies Information</div>
      <div className="flex-grow overflow-y-auto w-5/6 mt-20">
        <Outlet />
      </div>
    </div>
  );
}
