import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "../Components";
import { NavbarLayout } from "../Layouts";
import { ROUTES_PATH } from "../Common/path";

const Characters = lazy(() => import("../View/Character/Characters"));
const WishList = lazy(() => import("../View/WishList/WishList"));

const { START, WISHLIST } = ROUTES_PATH;

const RouteApp = () => {
  const charactersView = (
    <Suspense fallback={<Loader />}>
      <Characters />
    </Suspense>
  );
  const wishListView = (
    <Suspense fallback={<Loader />}>
      <WishList />
    </Suspense>
  );
  return (
    <>
      <NavbarLayout />
      <Routes>
        <Route index path={START} element={charactersView} />
        <Route path={WISHLIST} element={wishListView} />
      </Routes>
    </>
  );
};

export default RouteApp;
