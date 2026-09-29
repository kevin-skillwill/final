import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
      <Nav />
      <main style={{ minHeight: "calc(100vh - 120px)" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
