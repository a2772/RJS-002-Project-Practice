import { Route, Routes } from "react-router-dom"
import CryptosMain from "./CryptosMain"
import RouteNotFound from "./not_found/RouteNotFound"
import FAQ from "./util/FAQ"
import AboutUs from "./util/AboutUs"
import InsideApp from "./InsideApp"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InsideApp />}>
        <Route index element={<CryptosMain />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="faqs" element={<FAQ />} />
      </Route>
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  )
}

export default App
