import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./loader";

function AppLayout() {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";

  return (
    <div className="layout">
      {isloading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
