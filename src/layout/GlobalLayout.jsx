import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <div>
      <div>globalLayout</div>
      <Outlet />
    </div>
  );
}
