import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./pages/Loading";


const HomePage = lazy(()=> import ( "./pages/HomePage"));
const HomeCardPage = lazy(()=> import ( "./pages/HomeCardPage"));

const ElectronicsPage = lazy(()=> import ( "./pages/ElectronicsPage"));
const MensPage = lazy(()=> import ( "./pages/MensPage"));
const WomensPage = lazy(()=> import ( "./pages/WomensPage"));
const NotFound = lazy(()=> import ( "./pages/NotFound"));
const Layout = lazy(()=> import( "./components/layout"));
const Jewelery= lazy(()=>import( "./pages/Jewelery"));
const CartPage= lazy(()=>import( "./pages/CartPage"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/:homeCardId" element={<HomeCardPage/>}/>

        <Route path="electronics" element={<ElectronicsPage/>}/>
        <Route path="mens" element={<MensPage/>}/>
        <Route path="womens" element={<WomensPage/>}/>
        <Route path="jewelery" element={<Jewelery/>}/>
        <Route path="cartPage" element={<CartPage/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
