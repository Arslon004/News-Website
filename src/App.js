import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/shares/Loading";

const HomePage = lazy(()=>import( "./pages/HomePage"));
const Jewelery = lazy(()=>import( "./pages/Jewelery"));
const ElectronicPage = lazy(()=>import( "./pages/ElectronicPage"));

const MenClothingPage = lazy(()=>import( "./pages/MenClothingPage"));
const WomenClothingPage = lazy(()=>import( "./pages/WomenClothingPage"));
const CartPage = lazy(()=>import( "./pages/CartPage"));
const NotFoundPage = lazy(()=>import( "./pages/NotFoundPage"));
const Layout = lazy(()=>import( "./components/layout"));
const HomeCategoryCardPage = lazy(()=>import( "./pages/HomeCategoryCardPage"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/:pageId" element={<HomeCategoryCardPage />} />

          <Route path="jewelery" element={<Jewelery />} />
          <Route path="electronics" element={<ElectronicPage />} />
          <Route path="menClothing" element={<MenClothingPage />} />
          <Route path="womenClothing" element={<WomenClothingPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
