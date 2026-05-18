import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function Layout() {
  return (
    <>
      <aside>
        <Menu />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
